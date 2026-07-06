import assert from "node:assert/strict";
import test from "node:test";
import { describeDemoRepository } from "../src/app.ts";

test("demo repository declares a safe public scan target", () => {
  const status = describeDemoRepository();

  assert.equal(status.repository, "kotnisofiane-bit/scribe-demo-public");
  assert.equal(status.secrets, "none");
  assert.equal(status.commercialReady, false);
});
