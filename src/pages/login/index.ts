import { Login } from '../../components/Login';
import { loginInputs } from '../../data/login';
import Block from '../../utils/Block';
import template from './login.hbs';

interface LoginPageProps {
  title: string;
}

export class LoginPage extends Block<LoginPageProps> {
  constructor(props: LoginPageProps) {
    super(props);
  }

  init() {
    this.children.Login = new Login({loginInputs});
  }

  render() {
    return this.compile(template, this.props);
  }
}
