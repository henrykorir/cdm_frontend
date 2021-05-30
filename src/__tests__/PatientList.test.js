import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PatientList from '../components/PatientList'

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

describe('PatientList', () => {
	it('shows \'loading ...\' at first ',() =>{
		act(() =>{
			render(<PatientList />, container);
		})
		expect(container.textContent).toBe("Loading ...");
	});
});