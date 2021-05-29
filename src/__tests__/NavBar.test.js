import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";

import NavBar from '../components/NavBar'

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
describe('NavBar',() => {
	it('has anchors with the right texts',()=>{
		act(() =>{
			render(<NavBar />, container);
		});
		const anchors = container.querySelectorAll('a');
		expect(anchors[0].textContent).toBe('criteria');
		expect(anchors[1].textContent).toBe('patients');
	})
	it('anchors changes states correctly',() => {
		const onChangeState = jest.fn();
		act(() =>{
			render(<NavBar onChangeState={onChangeState}/>, container);
			container.querySelectorAll('a')[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
			container.querySelectorAll('a')[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
		})
		expect(onChangeState).toHaveBeenCalledWith(1);
		expect(onChangeState).toHaveBeenCalledWith(2);
	})
})