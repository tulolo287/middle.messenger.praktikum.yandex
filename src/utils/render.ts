import { HomePage } from "../pages/home";
import { Page404 } from "../pages/404";
import { Page500 } from "../pages/500";
import { ChatPage } from "../pages/chat";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { ProfilePage } from "../pages/profile";

const ROUTES = {
   'home': HomePage,
   '404': Page404,
   '500': Page500,
   'chat': ChatPage,
   'login': LoginPage,
   'register': RegisterPage,
   'profile': ProfilePage,
}

export function render (name: any, title: string = 'No title') {
   const root = document.querySelector('#app')!;
   root.innerHTML = '';

   const Page = new ROUTES[name](title);
   root.append(Page.getContent()!);
 
   Page.dispatchComponentDidMount();
}

