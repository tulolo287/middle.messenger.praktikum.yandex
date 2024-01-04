import AuthController from './controllers/AuthController';
import { ROUTES } from './data/consts';
import { Page404 } from './pages/404-page';
import { Page500 } from './pages/500-page';
import { ChangePasswordPage } from './pages/change-password-page';
import { ChangeProfilePage } from './pages/change-profile-page';
import { ChatPage } from './pages/chat-page';
import { LoginPage } from './pages/login-page';
import { ProfilePage } from './pages/profile-page';
import { RegisterPage } from './pages/register-page';
import Router from './utils/Router';

window.addEventListener(
  'DOMContentLoaded',

  async () => {
    Router.use(ROUTES.LOGIN, LoginPage)
      .use(ROUTES[404], Page404)
      .use(ROUTES[500], Page500)
      .use(ROUTES.CHAT, ChatPage)
      .use(ROUTES.REGISTER, RegisterPage)
      .use(ROUTES.PROFILE, ProfilePage)
      .use(ROUTES.CHANGE_PROFILE, ChangeProfilePage)
      .use(ROUTES.CHANGE_PASSWORD, ChangePasswordPage);

    let isProtectedRoute = true;

    switch (window.location.pathname) {
      case ROUTES.LOGIN:
      case ROUTES.REGISTER:
        isProtectedRoute = false;
        break;
      default:
        isProtectedRoute = true;
    }

    try {
      await AuthController.fetchUser();

      Router.start();

      if (!isProtectedRoute) {
        Router.go(ROUTES.CHAT);
      }
    } catch (e: any) {
      // alert(e);
      console.log(e);
      Router.start();

      if (isProtectedRoute) {
        Router.go(ROUTES.LOGIN);
      }
    }
    Router.start();
  },
);
