import fs from "fs";
import { parse } from "csv-parse";
import { consume_invoices } from "./consumer.js";

async function loadCsvFile(filePath) {
  const results = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(parse({ delimiter: ",", columns: true }))
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", reject);
  });
}

describe("Consume invoices", () => {
  let invoices;

  beforeEach(async () => {
    invoices = await loadCsvFile("invoices.csv");
  });

  it("should do nothing when there are no invoices", () => {
    expect(consume_invoices([])).toBe("Hello World!");
  });
});
