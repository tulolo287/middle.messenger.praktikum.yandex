import { Register } from '../../components/Register/index.ts';
import { registerInputs } from '../../data/register.ts';
import Block from '../../utils/Block.ts';
import template from './register.hbs';

interface RegisterPageProps {
  title: string;
}

export class RegisterPage extends Block<RegisterPageProps> {
  constructor(props: RegisterPageProps) {
    super(props);
  }

  init() {
    this.children.Register = new Register({ registerInputs });
  }

  render() {
    return this.compile(template, this.props);
  }
}
