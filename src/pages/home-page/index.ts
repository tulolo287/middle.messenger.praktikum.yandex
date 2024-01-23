import { PageLinks } from '../../components/PageLinks/index.ts';
import Block from '../../utils/Block.ts';
import template from './home.hbs';

interface HomePageProps {
  title: string;
}

export class HomePage extends Block<HomePageProps> {
  constructor(props: HomePageProps) {
    super(props);
  }

  init() {
    this.children.pageLinks = new PageLinks({});
  }

  render() {
    return this.compile(template, this.props);
  }
}
