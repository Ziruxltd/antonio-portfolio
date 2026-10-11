import { test } from 'node:test';
import assert from 'node:assert/strict';
import { messages } from './messages.js';

const keys = (node, prefix = '') =>
  Object.entries(node).flatMap(([key, value]) =>
    typeof value === 'object' ? keys(value, `${prefix}${key}.`) : `${prefix}${key}`,
  );

test('every locale has the same keys as English', () => {
  for (const [code, dict] of Object.entries(messages)) {
    assert.deepEqual(keys(dict).sort(), keys(messages.en).sort(), `locale "${code}"`);
  }
});
