import { HomePage } from '../pages/home';
import { Page404 } from '../pages/404';
import { Page500 } from '../pages/500';
import { ChatPage } from '../pages/chat';
import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';
import { ProfilePage } from '../pages/profile';
import { ChangePasswordPage } from '../pages/change-password';
import { ChangeProfilePage } from '../pages/change-profile';

const ROUTES = {
  home: HomePage,
  404: Page404,
  500: Page500,
  chat: ChatPage,
  login: LoginPage,
  register: RegisterPage,
  profile: ProfilePage,
  changePassword: ChangePasswordPage,
  changeProfile: ChangeProfilePage,
};

export function render(name: keyof typeof ROUTES, title: string = 'No title') {
  const root = document.querySelector('#app')!;
  root.innerHTML = '';

  const Page = ROUTES[name];
  const page = new Page({title})
  root.append(page.getContent()!);

  page.dispatchComponentDidMount();
}
