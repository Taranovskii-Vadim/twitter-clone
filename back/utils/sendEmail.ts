import Mail from "nodemailer/lib/mailer";

import { transport } from "../core/mailer";

type TSendEmail = (
  options: Mail.Options,
  callback: (err: Error | null) => void
) => void;

export const sendEmail: TSendEmail = (options, callback) => {
  transport.sendMail(
    options,
    callback ||
      ((err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      })
  );
};
