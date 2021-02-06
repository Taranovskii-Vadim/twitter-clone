import { createHash } from "crypto";

export const generateMD5Hash = (value: string) =>
  createHash("md5").update(value).digest("hex");
