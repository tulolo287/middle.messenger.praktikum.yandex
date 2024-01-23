import { Button } from '../../components/Button/index.ts';
import { InputLabel } from '../../components/InputLabel/index.ts';
import { Link } from '../../components/Link/index.ts';
import { changePasswordInputs } from '../../data/change-password.ts';
import { ROUTES } from '../../data/consts.ts';
import { IInputLabel } from '../../typings/data.ts';
import Block from '../../utils/Block.ts';
import { checkValidation } from '../../utils/validation.ts';
import template from './change-password.hbs';

interface ChangePasswordPageProps {
  title: string;
}

export class ChangePasswordPage extends Block {
  constructor(props: ChangePasswordPageProps) {
    super(props);
  }

  init() {
    this.props.changePasswordInputs = changePasswordInputs;
    this.children.changePasswordInputs = this.props.changePasswordInputs.map(
      (input: IInputLabel) => new InputLabel({ ...input }),
    );
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
            const data = checkValidation(form);
            if (data && data.newPassword === data.repeat_newPassword) {
              console.log(data);
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
