import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";

import { userModel } from "../models/UserModel";
import { IUser } from "../models/UserModel/types";
import { getMd5Hash } from "../utils/getMd5Hash";

passport.use(
  new LocalStrategy(async (username, password, done) => {
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
      return done(e, false);
    }
  })
);

passport.use(
  new JwtStrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      try {
        return done(null, payload.user);
      } catch (e) {
        done(e);
      }
    }
  )
);

passport.serializeUser(function (user: IUser, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  userModel.findById(id, function (err, user) {
    done(err, user);
  });
});

export { passport };
