import { Link } from '../../components/Link';
import Block from '../../utils/Block';
import template from './500.hbs';

interface IPage500Props {
  title: string;
}

export class Page500 extends Block {
  constructor(props: IPage500Props) {
    super(props);
  }

  protected init(): void {
    this.children.Link = new Link({
      class: 'homeLink',
      text: '\u2190 Назад к чатам',
      url: '/',
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
