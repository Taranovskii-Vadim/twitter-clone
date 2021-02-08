import { createHash } from "crypto";

export const getMd5Hash = (value: string) =>
  createHash("md5").update(value).digest("hex");
