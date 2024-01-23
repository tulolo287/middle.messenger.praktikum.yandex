import Block from './Block.ts';
import { render } from './render.ts';

export interface BlockConstructable<P extends Record<string, any> = any> {
  new (props: P): Block<P>;
}

export class Route {
  private _block: Block | null = null;

  constructor(
    private pathname: string,
    private readonly BlockClass: BlockConstructable,
    private readonly rootQuery: string,
  ) {}

  render() {
    if (!this._block) {
      this._block = new this.BlockClass({});
      render(this.rootQuery, this._block);
    }
  }

  leave() {
    this._block = null;
  }

  match(pathname: string) {
    return pathname === this.pathname;
  }
}
