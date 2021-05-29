import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import SearchBar from '../components/SearchBar'

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

describe('SearchBar', () => {
	it('should render correctly',() =>{
		act(() =>{
			render(<SearchBar />, container);
		})
		expect(container.innerHTML).toMatchSnapshot();
	})
	it('should render with text and a callback', () => {
		const onChange = jest.fn();
		act(() =>{
			render(<SearchBar text={""} onChange={ onChange } />, container);
		});
		//expect(text).not.toBeDefined();
		expect(onChange).toBeDefined();
	});
});
