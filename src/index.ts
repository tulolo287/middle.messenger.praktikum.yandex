import AuthController from './controllers/AuthController.ts';
import { ROUTES } from './data/consts.ts';
import { Page404 } from './pages/404-page/index.ts';
import { Page500 } from './pages/500-page/index.ts';
import { ChangePasswordPage } from './pages/change-password-page/index.ts';
import { ChangeProfilePage } from './pages/change-profile-page/index.ts';
import { ChatPage } from './pages/chat-page/index.ts';
import { LoginPage } from './pages/login-page/index.ts';
import { ProfilePage } from './pages/profile-page/index.ts';
import { RegisterPage } from './pages/register-page/index.ts';
import Router from './utils/Router.ts';

window.addEventListener(
  'DOMContentLoaded',

  async () => {
    Router.use(ROUTES.LOGIN, LoginPage)
      .use(ROUTES[404], Page404)
      .use(ROUTES[500], Page500)
      .use(ROUTES.REGISTER, RegisterPage)
      .use(ROUTES.CHAT, ChatPage)
      .use(ROUTES.PROFILE, ProfilePage)
      .use(ROUTES.CHANGE_PROFILE, ChangeProfilePage)
      .use(ROUTES.CHANGE_PASSWORD, ChangePasswordPage);

    let isProtectedRoute = true;
    let notFound = false;

    const route = window.location.pathname;
    switch (route) {
      case ROUTES.LOGIN:
      case ROUTES.REGISTER:
        isProtectedRoute = false;
        break;
      case ROUTES.CHAT:
      case ROUTES.PROFILE:
        isProtectedRoute = true;
        break;
      default:
        notFound = true;
    }

    try {
      await AuthController.fetchUser();

      // Router.start();
      if (!isProtectedRoute) {
        Router.go(ROUTES.CHAT);
      } else if (notFound) {
        Router.go(ROUTES[404]);
      } else {
        Router.go(route);
      }
    } catch (e: any) {
      console.log(e);

      // Router.start();
      if (notFound) {
        Router.go(ROUTES[404]);
        return;
      }
      if (isProtectedRoute) {
        Router.go(ROUTES.LOGIN);
        return;
      }
      if (!isProtectedRoute) {
        Router.go(route);
      }
    }
  },
);
