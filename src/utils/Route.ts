import Block from './Block';
import { render } from './render';

export class Route {
  _pathname: string;

  _blockClass: typeof Block;

  _props: Record<string, any>;

  _block: Block | null;

  constructor(pathname: string, view: typeof Block, props: Record<string, any>) {
    this._pathname = pathname;
    this._blockClass = view;
    this._props = props;
    this._block = null;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props);
    }
    render(this._props.rootQuery, this._block);
  }

  leave() {
  this._block = null;
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }
}
