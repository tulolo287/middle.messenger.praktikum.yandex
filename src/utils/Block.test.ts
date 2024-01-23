import { expect } from 'chai';
import sinon from 'sinon';
import Block from './Block.ts';

describe('Block', () => {
  beforeEach(() => {});

  class TestComponent extends Block {}

  it('should init component', function (done) {
    const testBlock = new TestComponent({});

    let stub = sinon.stub(testBlock.getEventBus(), 'emit');
    testBlock.getEventBus().emit('init');

    expect(stub.calledWith('init')).to.be.true;

    done();
  });

  it('should update component after props changed', function (done) {
    const testBlock = new TestComponent({});

    let stub = sinon.stub(testBlock.getEventBus(), 'emit');

    testBlock.setProps({ test: 'test' });

    expect(stub.calledWith('flow:component-did-update')).to.be.true;

    done();
  });
});
