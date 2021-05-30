import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";

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
	const onChange = jest.fn(str => str)
	it('renders correctly',() =>{
		act(() =>{
			render(<InputField />, container);
		})
		expect(container.querySelector('input').value).toBe('');
	});
	
	it('renders a text', () => {
		act(() => {
			render(<InputField keyword ={'p'} setKeyword={ onChange } />, container);
		});
		
		expect(container.querySelector('input').value).toBe("p");
	});
	it('should change the value of input field', () => {
		
		act(() => {
			render(<InputField keyword ={'p'} setKeyword={ onChange } />, container);
			container.querySelector('input').value ='a'
			Simulate.change(container.querySelector('input'))
		});
		
		expect(onChange).toHaveBeenCalledWith('a');
		expect(onChange).toHaveBeenCalledTimes(1);
		act(() => {
			const string = 'patient 6'
			for(let ch of [...string]){
				console.log(ch)
				container.querySelector('input').value = ch;
				Simulate.change(container.querySelector('input'));
			};
		});
		expect(onChange).toHaveBeenCalledTimes('patient 6'.length + 1)
	})
})