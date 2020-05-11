import * as bcrypt from 'bcrypt';
import query from "../db/query";
import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const signinUser = async (ctx) => {
    let res = { message: 'User NOT logged' }
    let data = await query('selectUser.sql', [ctx.request.body['email']]);
    let user = data.rows[0];

    if (user) {
        const match = await bcrypt.compare(ctx.request.body['password'], user['password']);
        if (match) {
            dotenv.config();

            res.message = 'User logged',
            res.id = user['id'],
            res.mail = user['email'],
            res.token = jwt.sign({ data: user['email'] }, process.env.JWT_SECRET, { expiresIn: '12h' })
        }
    }

    ctx.body = res;
}

export {
    signinUser
};