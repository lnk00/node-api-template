import { getApiInformation } from './controllers/infoController';
import { createUser } from './controllers/signupController';
import { signinUser } from './controllers/signinController';
import { getUserInformation } from './controllers/userController';

const routeRegister = (router, passport) => {
    router.get('/', getApiInformation.bind(this));
    router.post('/signup', createUser.bind(this));
    router.post('/signin', signinUser.bind(this));

    router.get('/user', passport.authenticate('jwt', {session: false}), getUserInformation.bind(this));
}

export default routeRegister;