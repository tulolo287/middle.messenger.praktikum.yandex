import { PageLinks } from '../../components/PageLinks';
import data from '../../data';
import { IPage } from '../../typings/data';
import Block from '../../utils/Block';
import template from './home.hbs';

interface HomePageProps {
  title: string;
}

export class HomePage extends Block<HomePageProps> {
  constructor(props: HomePageProps) {
    super('main', props);
  }

  init() {
    this.children.pageLinks = new PageLinks({ pages: data.pages });
  }

  render() {
    return this.compile(template, this.props);
  }
}
