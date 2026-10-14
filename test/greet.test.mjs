import assert from 'node:assert/strict';
import test from 'node:test';
import { greet } from '../src/greet.mjs';
test('fulfils the exact commercial greeting contract', () => {
  assert.equal(greet(), 'Hello commercial fulfilment.');
});
