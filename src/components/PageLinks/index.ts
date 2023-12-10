import data from '../../data';
import Block from '../../utils/Block';
import { Link } from '../Link';
import template from './page-links.hbs';

export class PageLinks extends Block {
  constructor(props) {
    super('div', props);
  }

  init() {
    this.props.pages = data.pages;
    this.children.Links = this.props.pages.map(
      (page) =>
        new Link({
          ...page,
        })
    );
  }

  render() {
    return this.compile(template, this.props);
  }
}
