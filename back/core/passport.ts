import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";

import { userModel } from "../models/UserModel";
import { IUser, TUser } from "../models/UserModel/types";
import { getMd5Hash } from "../utils/getMd5Hash";

passport.use(
  new LocalStrategy({ session: false }, async (username, password, done) => {
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
    } catch (err) {
      return done(err, false);
    }
  })
);

passport.serializeUser(function (user: IUser, done) {
  done(null, user._id);
});

passport.deserializeUser(function (_id, done) {
  userModel.findById(_id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new JwtStrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      try {
        const user = await userModel.findById(payload.data.id);
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (e) {
        return done(e, false);
      }
    }
  )
);

export { passport as appPassport };
