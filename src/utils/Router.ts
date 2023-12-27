import { Page404 } from '../pages/404-page';
import { Page500 } from '../pages/500-page';
import { ChatPage } from '../pages/chat-page';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';
import { ProfilePage } from '../pages/profile-page';
import { RegisterPage } from '../pages/register-page';
import { Route } from './Route';

export class Router {
  routes: Route[] = [];
  history: History = window.history;
  _currentRoute: Route | undefined = undefined;
  _rootQuery: string | null = '';
  static __instance: Router;

  constructor(rootQuery: string | null) {
    if (Router.__instance) {
      return Router.__instance;
    }
    this.routes = [];
    this.history = window.history;
    this._currentRoute = undefined;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  start() {
    window.onpopstate = (event) => {
      this._onRoute((event.currentTarget as Window).location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  use(pathname: string, block: any) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    this._currentRoute = route;

    route?.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export function getRouter() {
  const router = new Router('#app');
  router
    .use('/', LoginPage)
    .use('/404', Page404)
    .use('/500', Page500)
    .use('/messenger', ChatPage)
    .use('/sign-up', RegisterPage)
    .use('/settings', ProfilePage)
    .start();
  return router;
}
