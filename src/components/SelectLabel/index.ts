import { ISelectLabel } from '../../typings/data.ts';
import Block from '../../utils/Block.ts';
import { Select } from '../Select/index.ts';
import template from './select-label.hbs';

export class SelectLabel extends Block {
  constructor(props: ISelectLabel) {
    super(props);
  }

  init() {
    this.children.SelectLabel = new Select({ ...this.props });
  }

  render() {
    return this.compile(template, this.props);
  }
}
