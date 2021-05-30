import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";

import Link from '../components/Link'

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
describe('Link',() => {
	it('renders an anchor successfully',() =>{
		act(() =>{
			render(<Link />, container);
		})
		expect(container.textContent).toBe("");
	});
	it('renders with a provided text as label', () => {
		act(()=>{
			render(<Link text='anchor' />, container)
		});
		expect(container.querySelector('a').textContent).toBe('anchor')
	});
	it('renders with a provided text as label', () => {
		const data = {
				'name':'patient 59',
				'Encounter Date': '2021-5-31',
				'Location': 'Location-8',
				'Known Diabetic': 'New',
				'Gender': 'M',
				'Age': 3
		}
		const spyOnClick = jest.fn().mockImplementationOnce(() => data);			
		act(()=>{
			render(
				<Link 
					text='anchor' 
					location={8}
					criteria={'New Diabetic'} 
					onClickLink={spyOnClick}
				/>,
				container
			)
			//container.querySelectorAll('a')[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
			Simulate.click(container.querySelector('a'))
		});
		expect(spyOnClick).toHaveBeenCalledTimes(1)
	});
});