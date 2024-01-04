import { Button } from '../../components/Button';
import { InputLabel } from '../../components/InputLabel';
import { Link } from '../../components/Link';
import UserController from '../../controllers/UserController';
import { ROUTES } from '../../data/consts';
import { IInputLabel } from '../../typings/data';
import Block from '../../utils/Block';
import { withStore } from '../../utils/Store';
import { checkValidation } from '../../utils/validation';
import template from './change-profile.hbs';

interface ChangeProfilePageProps {
  title: string;
  profileInputs: IInputLabel[];
}

export class ChangeProfilePageBase extends Block<ChangeProfilePageProps> {
  constructor(props: ChangeProfilePageProps) {
    super(props);
  }

  init() {
    if (this.props.profileInputs) {
      const profile = this.props.profileInputs;
      this.children.ChangeProfileInputs = profile.map(
        (item) => new InputLabel({ ...item }),
      );
    }

    this.children.Link = new Link({
      class: 'homeLink',
      text: '\u2190 Назад',
      url: ROUTES.PROFILE,
    });
    this.children.Save = new Button({
      type: 'submit',
      text: 'Сохранить',
      events: {
        click: (e) => {
          e.preventDefault();
          const form = document.querySelector('form');

          if (form) {
            const formData = checkValidation(form);
            if (formData) {
              console.log(formData);
              UserController.changeProfile(formData);
            } else {
              alert('Invalid form');
            }
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withProfile = withStore((state) => ({
  profile: state.user,
  profileInputs: state.profileInputs || [],
}));

export const ChangeProfilePage = withProfile(ChangeProfilePageBase as typeof Block);
