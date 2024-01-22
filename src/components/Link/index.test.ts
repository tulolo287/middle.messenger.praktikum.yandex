import { expect } from 'chai';
import { Link } from './index.ts';
import Router from '../../utils/Router.ts';
import sinon from 'sinon';

describe('Link', () => {
  let link = new Link({ url: '/' });

  it('should render', () => {
    new Link({ url: '/' });
  });

  it('element should return span', () => {
    const element = link.element;

    expect(element).to.be.instanceof(window.HTMLAnchorElement)
  });

  it('should go to passed route on click', () => {
    const spy = sinon.spy(Router, 'go');
    const element = link.element as HTMLSpanElement;

    element.click();

    expect(spy.calledOnce).to.eq(true);
  });
});
