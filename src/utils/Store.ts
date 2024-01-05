import { User } from '../api/AuthAPI';
import { ChatInfo } from '../api/ChatsAPI';
import { Message } from '../controllers/MessagesController';
import { IInputLabel } from '../typings/data';
import Block from './Block';
import { EventBus } from './EventBus';
import { set } from './helpers';

export enum StoreEvents {
  Updated = 'updated',
}

export interface IState {
  chatUsers: User[];
  user: User;
  chats: ChatInfo[];
  messages: Record<number, Message[]>;
  selectedChat?: number;
  profileInputs: IInputLabel;
  avatar: string;
}

export class Store extends EventBus {
  private state = {} as IState;

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);

    this.emit(StoreEvents.Updated, this.getState());
  }

  public getState() {
    return this.state;
  }
}

const store = new Store();

export function withStore(mapStateToProps: (state: IState) => Record<string, any>) {
  return function wrap<P>(Component: typeof Block<Record<string, P>>) {
    return class WithStore extends Component {
      constructor(props: Record<string, P>) {
        let previousState = mapStateToProps(store.getState());

        super({ ...(props), ...previousState });

        store.on(StoreEvents.Updated, () => {
          const stateProps = mapStateToProps(store.getState());

          previousState = stateProps;

          this.setProps({ ...stateProps });
        });
      }
    };
  };
}

export default store;
