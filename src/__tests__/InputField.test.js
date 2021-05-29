import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import InputField from '../components/InputField'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
describe('InputField', () => {
	it('it renders correctly',() =>{
		act(() =>{
			render(<InputField />, container);
		})
		expect(container.querySelector('input').value).toBe("");
	});
	it('takes in text', () => {
		const spy = jest.fn(input => 'p');
		act(() => {
			render(<InputField keyword ={'p'} onChange={ spy } />, container)
		});
		expect(container.querySelector('input').value).toBe('p');
	});
})