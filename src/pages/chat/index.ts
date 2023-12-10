import { Chats } from '../../components/Chats';
import { Dialogs } from '../../components/Dialogs';
import Block from '../../utils/Block';
import template from './chat.hbs';

export class ChatPage extends Block {
  constructor(props) {
    super('main', props);
  }

  init() {
   this.children.Chats = new Chats({
      
   })

   this.children.Dialogs = new Dialogs({
      
   })
  }

  render() {
    return this.compile(template, this.props);
  }
}
