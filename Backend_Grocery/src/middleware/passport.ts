import UserModel from "../Model/UserModel";
import { SECRET } from "../Config/db";
import passportJwt from "passport-jwt";
import { PassportStatic } from "passport";
import { Request } from "express";
const { Strategy } = passportJwt;
const cookieExtractor = (req: Request) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies?.token;
  }
  return token;
};
const optionsCookie = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: SECRET,
};
export default (passport: PassportStatic) => {
  passport.use(
    new Strategy(optionsCookie, async (payload, done) => {
      await UserModel.findById(payload.userId)
        .then((UserModel) => {
            UserModel ? done(null, UserModel) : done(null, false);
        })
        .catch(() => done(null, false));
    })
  );
};