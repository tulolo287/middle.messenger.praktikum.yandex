import { render } from './render';

interface IRoute {
  _pathname: string;
  _blockClass: any;
  _props: any;
  _block: any;
}

export class Route implements IRoute {
  _pathname: string;
  _blockClass: any;
  _props: any;
  _block: any;

  constructor(pathname: string, view: any, props: any) {
    this._pathname = pathname;
    this._blockClass = view;
    this._props = props;
    this._block = null;
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
    }
    render(this._props.rootQuery, this._block);
    return;
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }
}
