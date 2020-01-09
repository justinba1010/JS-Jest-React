import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Counter } from './App';
describe('Counter', () => {
  test('snapshot renders', () => {
    const component = TestRenderer.create(
      <Counter counter={1} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
