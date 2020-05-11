import Koa from 'koa';
import Router from 'koa-router';
import Logger from 'koa-logger';
import BodyParser from 'koa-bodyparser';
import routeRegister from './app/routes';
import passport from 'koa-passport';
import { authStrategyRegister } from './app/services/auth';

const app = new Koa();
const router = new Router();
const logger = new Logger();
const bodyParser = new BodyParser();

app.use(logger);
app.use(bodyParser);
app.use(passport.initialize());

authStrategyRegister(passport);
routeRegister(router, passport);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);