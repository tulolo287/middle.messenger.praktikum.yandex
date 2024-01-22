import { expect } from 'chai';
import sinon from 'sinon';
import { Button } from './index.ts';

describe('Button', () => {
  const testBtn = new Button({
    text: 'Hello', class: 'bla', type: 'button', events: { click: () => { console.log('Hello'); } },
  });

  it('should render button', () => {
    expect(testBtn.element).to.be.instanceof(window.HTMLButtonElement);
    expect(testBtn.element?.className).to.be.equal('bla');
    expect(testBtn.element?.textContent).to.be.equal('Hello');

    const spy = sinon.spy(testBtn.element!, 'click');
    // testBtn.element?.click()
    const element = testBtn.element as HTMLButtonElement;

    element.click();
    expect(spy.calledOnce).to.be.true;
    // const expected = spy.exceptions('click')
    //  expected.exactly(1)
    // spy.verify()
  });
});
