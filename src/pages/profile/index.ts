import { PageLinks } from '../../components/PageLinks';
import data from '../../data';
import { IPage } from '../../typings/data';
import Block from '../../utils/Block';
import template from './profile.hbs';

interface ProfilePageProps {
  title: string;
  profile: {}
}

export class ProfilePage extends Block<ProfilePageProps> {
  constructor(props: ProfilePageProps) {
    super('main', props);
  }

  init() {
    this.props.profile = data.profile;
    this.children.Login = new PageLinks({ pages: data.pages });
  }

  render() {
    return this.compile(template, this.props);
  }
}
