import fs from 'fs/promises';
import { parse } from 'csv';
import { consume_invoices } from './consumer.js';

describe('consume_invoices', () => {
  let invoices;
  beforeEach(async () => {
    const csv = await fs.readFile('invoices.csv', 'utf8');
    invoices = await parse(csv);
  });
  test('empty list', () => {
    consume_invoices([]);
  });
});