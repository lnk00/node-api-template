import query from '../db/query';
import * as bcrypt from 'bcrypt';
import {
    emailValidator,
    passwordValidator
} from '../services/validators';

const createUser = async (ctx) => {
    const res = { message: 'User NOT created' };

    if (emailValidator(ctx.request.body['email']) && passwordValidator(ctx.request.body['password'])) {
        const hash = await bcrypt.hash(ctx.request.body['password'], 10);
        const data = await query('insertUser.sql', [ctx.request.body['email'], hash]);
        if (data['rowCount'] !== 0) {
            res.message = 'User created'
            res.email = ctx.request.body['email']
        }
    }

    ctx.body = res
}

export {
    createUser
};