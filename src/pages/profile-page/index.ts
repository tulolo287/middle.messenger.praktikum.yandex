import { Avatar } from '../../components/Avatar/index.ts';
import { Button } from '../../components/Button/index.ts';
import { ChangeAvatar } from '../../components/ChangeAvatar/index.ts';
import { Link } from '../../components/Link/index.ts';
import { PageLinks } from '../../components/PageLinks/index.ts';
import AuthController from '../../controllers/AuthController.ts';
import UserController from '../../controllers/UserController.ts';
import { ROUTES } from '../../data/consts.ts';
import { pages } from '../../data/pages.ts';
import { IProfile } from '../../typings/data.ts';
import Block from '../../utils/Block.ts';
import { withStore } from '../../utils/Store.ts';
import template from './profile.hbs';

interface ProfilePageProps {
  title: string;
  profile?: IProfile;
  show?: boolean;
  avatar?: string;
}

export class BaseProfilePage extends Block {
  constructor(props: ProfilePageProps) {
    super(props);
  }

  init() {
    this.children.ChangeAvatar = new ChangeAvatar({
      close: () => {
        this.props.show = false;
      },
      cb: (value: any) => {
        UserController.changeAvatar(value);
      },
    });
    this.props.show = false;
    this.children.Avatar = this.createAvatar();

    this.children.LinkChangeProfile = new Link({
      class: 'homeLink',
      text: 'Изменить данные',
      url: ROUTES.CHANGE_PROFILE,
    });
    this.children.LinkChangePassword = new Link({
      class: 'homeLink',
      text: 'Сменить пароль',
      url: ROUTES.CHANGE_PASSWORD,
    });
    this.children.LinkExit = new Button({
      class: 'exit',
      text: 'Выйти',
      type: 'button',
      events: {
        click: (e) => {
          e.preventDefault();
          AuthController.logout();
        },
      },
    });
    this.children.Link = new Link({
      class: 'homeLink',
      text: '\u2190 Назад',
      url: ROUTES.CHAT,
    });
    this.children.Login = new PageLinks({ pages });
  }

  protected componentDidUpdate(): boolean {
    this.children.Avatar = this.createAvatar();
    return true;
  }

  private createAvatar() {
    return new Avatar({
      alt: 'фото-профиля',
      class: 'avatar__change',
      src:
        `https://ya-praktikum.tech/api/v2/resources${this.props.profile?.avatar}`
        || 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png',
      cb: () => {
        this.props.show = true;
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
const withUser = withStore((state) => ({
  profile: state.user,
  avatar: state.avatar,
}));

export const ProfilePage = withUser(BaseProfilePage as typeof Block);
