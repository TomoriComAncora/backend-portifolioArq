import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { CreateUserService } from "../services/user/CreateUserGoogleService.js";
import dotenv from "dotenv";
dotenv.config();
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.BACKEND_URL}/auth/google/callback`,
}, async (acessToken, refreshToken, profile, done) => {
    const { id, displayName, emails } = profile;
    const fotoPerfil = profile.photos?.[0]?.value;
    const createUserGoogleService = new CreateUserService();
    const user = await createUserGoogleService.execute({
        googleId: id,
        nome: displayName,
        email: emails?.[0]?.value,
        fotoPerfil,
    });
    return done(null, user);
}));
export default passport;
//# sourceMappingURL=passaport.js.map