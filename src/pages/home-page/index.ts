import { PageLinks } from '../../components/PageLinks';
import Block from '../../utils/Block';
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
