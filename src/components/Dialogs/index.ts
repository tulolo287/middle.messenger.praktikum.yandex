import { dialogs } from '../../data/dialogs';
import { TDialog } from '../../typings/data';
import Block from '../../utils/Block';
import { DialogItem } from '../DialogItem';
import template from './dialogs.hbs';

interface IDialogsProps {
  dialogs: TDialog[];
}
export class Dialogs extends Block {
  constructor(props: IDialogsProps) {
    super(props);
  }

  init() {
    this.props.dialogs = dialogs;
    this.children.Dialogs = this.props.dialogs.map(
      (dialog: TDialog) => new DialogItem({ ...dialog }),
    );
  }

  render() {
    return this.compile(template, this.props);
  }
}
