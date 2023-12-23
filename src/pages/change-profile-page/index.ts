import { Button } from '../../components/Button';
import { InputLabel } from '../../components/InputLabel';
import { Link } from '../../components/Link';
import { changeProfileInputs } from '../../data/change-profile';
import { IInputLabel } from '../../typings/data';
import Block from '../../utils/Block';
import { checkValidation } from '../../utils/validation';
import template from './change-profile.hbs';

interface ChangeProfilePageProps {
  title: string;
}

export class ChangeProfilePage extends Block {
  constructor(props: ChangeProfilePageProps) {
    super(props);
  }

  init() {
    this.props.changeProfileInputs = changeProfileInputs;
    this.children.changeProfileInputs = this.props.changeProfileInputs.map(
      (input: IInputLabel) => new InputLabel({ ...input }),
    );
    this.children.Link = new Link({
      class: 'homeLink',
      text: '\u2190 Назад',
      url: 'profile',
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
            if (data && data.password === data.second_password) {
              console.log(data);
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
