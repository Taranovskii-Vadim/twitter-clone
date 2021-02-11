import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import { userModel } from "../models/UserModel";
import { getMd5Hash } from "../utils/getMd5Hash";
import { IUser } from "../models/UserModel/types";

passport.use(
  new LocalStrategy(
    async (username, password, done): Promise<void> => {
      try {
        const user = await userModel.findOne({
          $or: [{ email: username }, { nickname: username }],
        });

        if (!user) {
          return done(null, false);
        }

        if (user.password !== getMd5Hash(password + process.env.SECRET_KEY)) {
          return done(null, false);
        }

        return done(null, user);
      } catch (e) {
        done(e, false);
      }
    }
  )
);

passport.serializeUser(function (user: IUser, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  userModel.findById(id, function (err, user) {
    done(err, user);
  });
});

export { passport };
