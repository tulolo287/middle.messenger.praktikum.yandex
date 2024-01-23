import { expect } from 'chai';
import sinon from 'sinon';
import { Button } from './index.ts';

describe('Button', () => {

  const testBtn = new Button({
    text: 'Hello', class: 'bla', type: 'button', events: { click: () => { console.log('Hello'); } },
  });

  it('should render button', () => {
    expect(testBtn.element).to.be.instanceof(window.HTMLButtonElement);
  });

  it('should add text to button', () => {
    expect(testBtn.element?.textContent).to.be.equal('Hello');
  });

  it('should add class to button', () => {
    expect(testBtn.element?.className).to.be.equal('bla');
  });

  it('should click the button', () => {
    const spy = sinon.spy(testBtn.element!, 'click');
    const element = testBtn.element as HTMLButtonElement;

    element.click();

    expect(spy.calledOnce).to.be.true;
  });

});
