import { expect } from 'chai';
import sinon from 'sinon';
import Block from './Block.ts';

describe('Block', () => {
  beforeEach(() => {});

  class TestComponent extends Block {}

  it('should init component', (done) => {
    const testBlock = new TestComponent({});

    const stub = sinon.stub(testBlock.getEventBus(), 'emit');
    testBlock.getEventBus().emit('init');

    expect(stub.calledWith('init')).to.be.true;

    done();
  });

  it('should update component after props changed', (done) => {
    const testBlock = new TestComponent({});

    const stub = sinon.stub(testBlock.getEventBus(), 'emit');

    testBlock.setProps({ test: 'test' });

    expect(stub.calledWith('flow:component-did-update')).to.be.true;

    done();
  });
});
