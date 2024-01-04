import Block from '../../utils/Block';
import { validate } from '../../utils/validation';
import template from './input.hbs';

export class Input extends Block {
  constructor(props: Record<string, string>) {
    super(props);
  }

  init() {
    this.props.events = {
      blur: (e: Event) => {
        if (e.target) {
          const el = e.target as HTMLInputElement;
          let sibling = el.nextElementSibling as HTMLInputElement;
          if (sibling) {
            sibling.style.display = validate(el.name, el.value)
              ? 'none'
              : 'block';
            if (el.name === 'password') {
              const passwordValue = (
                document.getElementsByName('password')[0] as HTMLInputElement
              ).value;
              if (document.getElementsByName('repeat_password')[0]) {
                const secondPassword = document.getElementsByName(
                  'repeat_password',
                )[0] as HTMLInputElement;

                const secondPasswordValue = secondPassword.value;
                if (
                  passwordValue.length !== 0 &&
                  secondPasswordValue.length !== 0 &&
                  secondPassword.nextElementSibling
                ) {
                  sibling =
                    secondPassword.nextElementSibling as HTMLInputElement;
                  if (secondPasswordValue === passwordValue) {
                    sibling.style.display = 'none';
                  } else {
                    sibling.style.display = 'block';
                  }
                }
              }
            }
            if (el.name === 'newPassword' || el.name === 'repeat_newPassword') {
              const newPassword1 = document.getElementsByName(
                'newPassword',
              )[0] as HTMLInputElement;
              const newPassword2 = document.getElementsByName(
                'repeat_newPassword',
              )[0] as HTMLInputElement;
              if (
                newPassword1.value.length !== 0 &&
                newPassword2.value.length !== 0
              ) {
                sibling = newPassword2.nextElementSibling as HTMLInputElement;
                if (newPassword1.value === newPassword2.value) {
                  sibling.style.display = 'none';
                } else {
                  sibling.style.display = 'block';
                }
              }
            }
          }
        }
      },
    };
  }

  render() {
    return this.compile(template, this.props);
  }
}
