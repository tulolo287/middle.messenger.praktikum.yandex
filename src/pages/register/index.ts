import { Register } from '../../components/Register';
import Block from '../../utils/Block';
import template from './register.hbs';

interface RegisterPageProps {
  title: string;
}

export class RegisterPage extends Block<RegisterPageProps> {
  constructor(props: RegisterPageProps) {
    super('main', props);
  }

  init() {
    this.children.Register = new Register({});
  }

  render() {
    return this.compile(template, this.props);
  }
}
