// Downloads the CV from the private repo Ziruxltd/cv (folder current/) into public/ before each build:
// the .html goes to public/cv/index.html, the .pdf to public/cv.pdf, everything else to public/cv/.
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, extname } from 'node:path';

const API = 'https://api.github.com/repos/Ziruxltd/cv/contents';
const token = process.env.CV_REPO_TOKEN;

if (!token) {
  // Netlify must never publish the site without the CV; locally and in CI it is optional.
  if (process.env.NETLIFY) throw new Error('CV_REPO_TOKEN is not set: cannot download the CV.');
  console.warn(
    'fetch-cv: CV_REPO_TOKEN not set, skipping (the /cv/ page and cv.pdf will be missing).',
  );
  process.exit(0);
}

async function github(path, accept) {
  const res = await fetch(`${API}/${encodeURI(path)}?ref=main`, {
    headers: { Authorization: `Bearer ${token}`, Accept: accept },
  });
  if (!res.ok) throw new Error(`fetch-cv: GET ${path} failed with ${res.status} ${res.statusText}`);
  return res;
}

async function listFiles(dir) {
  const entries = await (await github(dir, 'application/vnd.github+json')).json();
  const nested = await Promise.all(
    entries.map((entry) => (entry.type === 'dir' ? listFiles(entry.path) : [entry.path])),
  );
  return nested.flat();
}

function target(path) {
  const ext = extname(path);
  if (ext === '.html') return 'public/cv/index.html';
  if (ext === '.pdf') return 'public/cv.pdf';
  return `public/cv/${path.slice('current/'.length)}`;
}

const files = await listFiles('current');
const targets = files.map(target);
for (const fixed of ['public/cv/index.html', 'public/cv.pdf']) {
  const count = targets.filter((t) => t === fixed).length;
  if (count !== 1)
    throw new Error(`fetch-cv: expected one file for ${fixed} in current/, found ${count}.`);
}

await rm('public/cv', { recursive: true, force: true });
await Promise.all(
  files.map(async (path, i) => {
    const body = Buffer.from(
      await (await github(path, 'application/vnd.github.raw')).arrayBuffer(),
    );
    await mkdir(dirname(targets[i]), { recursive: true });
    await writeFile(targets[i], body);
  }),
);
console.log(`fetch-cv: downloaded ${files.length} files from Ziruxltd/cv/current.`);
