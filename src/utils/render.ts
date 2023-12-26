import { HomePage } from '../pages/home-page';
import { Page404 } from '../pages/404-page';
import { Page500 } from '../pages/500-page';
import { ChatPage } from '../pages/chat-page';
import { LoginPage } from '../pages/login-page';
import { RegisterPage } from '../pages/register-page';
import { ProfilePage } from '../pages/profile-page';
import { ChangePasswordPage } from '../pages/change-password-page';
import { ChangeProfilePage } from '../pages/change-profile-page';

/* const ROUTES = {
  home: HomePage,
  404: Page404,
  500: Page500,
  chat: ChatPage,
  login: LoginPage,
  register: RegisterPage,
  profile: ProfilePage,
  changePassword: ChangePasswordPage,
  changeProfile: ChangeProfilePage,
}; */

/* export function render(name: keyof typeof ROUTES, title: string = 'No title') {
  const root = document.querySelector('#app')!;
  root.innerHTML = '';

  const Page = ROUTES[name];
  const page = new Page({ title });
  root.append(page.getContent()!);

  page.dispatchComponentDidMount();
} */

export function render(query: string, block: any) {
  const root = document.querySelector(query);
  if(root) {
    root.replaceChildren(block.getContent());
  }
  return root;
}
