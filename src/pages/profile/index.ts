import { Link } from '../../components/Link';
import { PageLinks } from '../../components/PageLinks';
import data from '../../data';
import { IProfile } from '../../typings/data';
import Block from '../../utils/Block';
import template from './profile.hbs';

interface ProfilePageProps {
  title: string;
  profile: IProfile
}

export class ProfilePage extends Block<ProfilePageProps> {
  constructor(props: ProfilePageProps) {
    super(props);
  }

  init() {
    this.children.LinkChangeProfile = new Link({
      class: 'homeLink',
      text: 'Изменить данные',
      url: 'changeProfile',
    });
    this.children.LinkChangePassword = new Link({
      class: 'homeLink',
      text: 'Сменить пароль',
      url: 'changePassword',
    });
    this.children.LinkExit = new Link({
      class: 'exit',
      text: 'Выйти',
      url: 'home',
    });
    this.props.profile = data.profile;
    this.children.Login = new PageLinks({ pages: data.pages });
  }

  render() {
    return this.compile(template, this.props);
  }
}
