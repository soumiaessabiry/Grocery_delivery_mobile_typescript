import passport from "passport";
export const authenticatUser=passport.authenticate("jwt",{session:false});