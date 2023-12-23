import { Link } from '../../components/Link';
import Block from '../../utils/Block';
import template from './404.hbs';

interface IPage404Props {
  title: string;
}

export class Page404 extends Block {
  constructor(props: IPage404Props) {
    super(props);
  }

  protected init(): void {
    this.children.Link = new Link({ class: 'homeLink', text: '\u2190 Назад к чатам', url: 'home' });
  }

  render() {
    return this.compile(template, this.props);
  }
}
