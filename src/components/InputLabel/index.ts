import { IInputLabel } from '../../typings/data';
import Block from '../../utils/Block';
import { Input } from '../Input';
import template from './input-label.hbs';

export class InputLabel extends Block {
  constructor(props: IInputLabel) {
    super(props);
  }

  init() {
    this.children.Input = new Input({ ...this.props });
  }

  render() {
    return this.compile(template, this.props);
  }
}
