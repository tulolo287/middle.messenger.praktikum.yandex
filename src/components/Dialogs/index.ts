import { IDialog } from '../../typings/data';
import Block from '../../utils/Block';
import { withStore } from '../../utils/Store';
import { DialogItem } from '../DialogItem';
import template from './dialogs.hbs';

interface DialogsProps {
  selectedChat: number | undefined;
  dialogs: IDialog[];
  userId: number;
}
export class BaseDialogs extends Block<DialogsProps> {
  constructor(props: DialogsProps) {
    super(props);
  }

  init() {
    this.children.Dialogs = this.createMessages(this.props);
  }

  protected componentDidUpdate(
    oldProps: DialogsProps,
    newProps: DialogsProps,
  ): boolean {
    this.children.Dialogs = this.createMessages(newProps);

    return true;
  }

  private createMessages(props: DialogsProps) {
    if (props.dialogs) {
      return props.dialogs.map(
        (data) => new DialogItem({
          ...data,
          class: props.userId === data.user_id ? 'sent' : 'received',
        }),
      );
    } else return [];
  }

  render() {
    return this.compile(template, this.props);
  }
}

const withSelectedChatDialogs = withStore((state) => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      dialogs: [],
      selectedChat: undefined,
      userId: state.user.id,
    };
  }

  return {
    dialogs: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id,
  };
});

export const Dialogs = withSelectedChatDialogs(BaseDialogs);
