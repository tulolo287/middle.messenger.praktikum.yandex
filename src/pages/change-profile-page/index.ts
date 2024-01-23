import { Button } from '../../components/Button/index.ts';
import { InputLabel } from '../../components/InputLabel/index.ts';
import { Link } from '../../components/Link/index.ts';
import UserController from '../../controllers/UserController.ts';
import { ROUTES } from '../../data/consts.ts';
import { IInputLabel } from '../../typings/data.ts';
import Block from '../../utils/Block.ts';
import { withStore } from '../../utils/Store.ts';
import { checkValidation } from '../../utils/validation.ts';
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
              alert('Неверно заполненная форма');
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

export const ChangeProfilePage = withProfile(
  ChangeProfilePageBase as typeof Block,
);
