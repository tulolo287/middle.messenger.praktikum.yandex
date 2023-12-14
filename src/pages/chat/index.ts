import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';
import { Chats } from '../../components/Chats';
import { Dialogs } from '../../components/Dialogs';
import { InputLabel } from '../../components/InputLabel';
import data from '../../data';
import { messageInputs } from '../../data/message';
import { IInputLabel } from '../../typings/data';
import Block from '../../utils/Block';
import { checkValidation } from '../../utils/validation';
import template from './chat.hbs';

interface ChatPageProps {
  title: string;
}

export class ChatPage extends Block {
  constructor(props: ChatPageProps) {
    super(props);
  }

  init() {
    this.children.Avatar = new Avatar({alt: "фото профиля", url: "profile", src: "https://cdn-icons-png.flaticon.com/512/3541/3541871.png"})
    this.props.messageInputs = messageInputs;
    this.children.MessageInput = this.props.messageInputs.map(
      (input: IInputLabel) => new InputLabel({ ...input })
    );
    this.children.Chats = new Chats({});
    this.children.Dialogs = new Dialogs({ dialogs: data.dialogs });
    this.children.Send = new Button({
      type: 'submit',
      text: 'Отправить >',
      events: {
        click: (e) => {
          e.preventDefault();
          const form = document.querySelector('form');
          if (form) {
            let data = checkValidation(form);
            console.log(data);
            if (data) {
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
