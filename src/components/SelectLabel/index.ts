import { ISelectLabel } from '../../typings/data';
import Block from '../../utils/Block';
import { Select } from '../Select';
import template from './select-label.hbs';

export class SelectLabel extends Block {
  constructor(props: ISelectLabel) {
    super(props);
  }

  init() {
    this.children.Select = new Select({ ...this.props });
  }

  render() {
    return this.compile(template, this.props);
  }
}
