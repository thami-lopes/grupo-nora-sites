import fs from "node:fs";
import path from "node:path";

// Resolved server-side (build/render time) so placeholder UI never depends
// on a client-side <img onError> race — the browser doesn't need to fail a
// request first to know the asset isn't there yet.
export function assetExists(publicRelativePath) {
  const clean = publicRelativePath.replace(/^\/+/, "");
  return fs.existsSync(path.join(process.cwd(), "public", clean));
}
