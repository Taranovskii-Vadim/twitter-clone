import crypto from "crypto";

export const generateMD5Hash = (value: string) =>
  crypto.createHash("md5").update(value).digest("hex");
