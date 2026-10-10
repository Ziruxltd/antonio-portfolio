import { ref } from 'vue';
import { messages } from './messages.js';

export const LOCALES = [
  { code: 'en', htmlLang: 'en', flag: '/flags/gb.svg', name: 'English' },
  { code: 'es', htmlLang: 'es-ES', flag: '/flags/es.svg', name: 'Español' },
  { code: 'de', htmlLang: 'de', flag: '/flags/de.svg', name: 'Deutsch' },
];

const COOKIE_NAME = 'lang';
const ONE_YEAR = 60 * 60 * 24 * 365;
const isSupported = (code) => LOCALES.some((l) => l.code === code);

function readCookie() {
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  return match && decodeURIComponent(match[1]);
}

// Cookie first (explicit user choice), then browser languages, then English.
function detectLocale() {
  const saved = readCookie();
  if (isSupported(saved)) return saved;
  const browserLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const lang of browserLangs) {
    const code = lang?.toLowerCase().split('-')[0];
    if (isSupported(code)) return code;
  }
  return 'en';
}

const locale = ref(detectLocale());

function applyHtmlLang() {
  document.documentElement.lang = LOCALES.find((l) => l.code === locale.value).htmlLang;
}
applyHtmlLang();

function setLocale(code) {
  if (!isSupported(code)) return;
  locale.value = code;
  document.cookie = `${COOKIE_NAME}=${code}; path=/; max-age=${ONE_YEAR}; SameSite=Lax`;
  applyHtmlLang();
}

const lookup = (dict, key) => key.split('.').reduce((node, part) => node?.[part], dict);

function t(key) {
  return lookup(messages[locale.value], key) ?? lookup(messages.en, key) ?? key;
}

export function useI18n() {
  return { locale, setLocale, t, LOCALES };
}
