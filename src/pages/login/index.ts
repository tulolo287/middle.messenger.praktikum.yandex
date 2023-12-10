import { Button } from '../../components/Button';
import { Login } from '../../components/Login';
import { PageLinks } from '../../components/PageLinks';
import data from '../../data';
import { IPage } from '../../typings/data';
import Block from '../../utils/Block';
import template from './login.hbs';

interface LoginPageProps {
  title: string;
}

export class LoginPage extends Block<LoginPageProps> {
  constructor(props: LoginPageProps) {
    super('main', props);
  }

  init() {
    
    this.children.Login = new Login({});
  }

  render() {
    return this.compile(template, this.props);
  }
}
