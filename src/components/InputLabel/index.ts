import { IInputLabel } from '../../typings/data.ts';
import Block from '../../utils/Block.ts';
import { Input } from '../Input/index.ts';

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
