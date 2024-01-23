import Block from './Block.ts';
import { Route } from './Route.ts';

export interface BlockConstructable<P extends Record<string, any> = any> {
  new(props: P): Block<P>;
}

export class Router {
  private static __instance?: Router;

  private routes: Route[] = [];

  private currentRoute: Route | null = null;

  private history = window.history;

  constructor(private readonly rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }
    this.routes = [];
    this.history = window.history;

    Router.__instance = this;
  }

  public start() {
    window.onpopstate = (event: PopStateEvent) => {
      const target = event.currentTarget as Window;

      this._onRoute(target.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  public use(pathname: string, block: any) {
    const route = new Route(pathname, block, this.rootQuery);
    this.routes.push(route);

    return this;
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back(step: number | undefined = undefined) {
    if (step) {
      this.history.go(step);
    }
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  public reset() {
    delete Router.__instance;
    const test = new Router(this.rootQuery);
    return test;
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default new Router('#app');
