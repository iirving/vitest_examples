import { readFileSync, existsSync } from "fs";
// existsSync
export function loadConfig() {
  const config_fs_location = "./config.json";
  if (!existsSync(config_fs_location)) {
    return undefined;
  }
  const file = readFileSync(config_fs_location, "utf-8");
  return JSON.parse(file);
}
