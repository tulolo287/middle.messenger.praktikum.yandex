import { Register } from '../../components/Register';
import { registerInputs } from '../../data/register';
import Block from '../../utils/Block';
import template from './register.hbs';


interface RegisterPageProps {
  title: string;
}

export class RegisterPage extends Block<RegisterPageProps> {
  constructor(props: RegisterPageProps) {
    super(props);
  }

  init() {
    this.children.Register = new Register({registerInputs});
  }

  render() {
    return this.compile(template, this.props);
  }
}
