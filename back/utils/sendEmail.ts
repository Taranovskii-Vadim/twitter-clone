import * as Mail from "nodemailer/lib/mailer";
import mailer from "../core/mailer";

type TSendEmail = (
  options: Mail.Options,
  callback: (err: Error | null) => void
) => void;

export const sendEmail: TSendEmail = (options, callback) =>
  mailer.sendMail(
    options,
    callback ||
      ((err: Error | null, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      })
  );
