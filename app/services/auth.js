import dotenv from 'dotenv';
import query from '../db/query';
import {
    Strategy as JwtStrategy,
    ExtractJwt
} from 'passport-jwt'

const authStrategyRegister = (passport) => {
    dotenv.config();

    let opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    };

    passport.use(
        new JwtStrategy(opts, (payload, done) => {
            query('selectUser.sql', [payload.data])
                .then(data => {
                    let user = data.rows[0];
                    if (user) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    };
                })
                .catch(err => {
                    return done(err, false);
                });
        })
    );
}

export {
    authStrategyRegister
}