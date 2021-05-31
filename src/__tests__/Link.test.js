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
	describe('with basic render props', () => {
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
	})
	describe('that',() => {
	it('responds to clicks', () => {
		const data = {
				Age: 3,
				'Encounter Date': "2021-05-05T00:00:00.000Z",
				Gender: "M",
				'Known Diabetic': "New",
				Location: "Location 3",
				name: "patient 51"
		}
		const href = 'https://ampath.netlify.app/patients/diabetic/known/?location=Location 3'
		const spyOnClick = jest
		.fn()
		.mockImplementationOnce(() => data);

		act(()=>{
			render(
				<Link 
					text={'1'}
					location={'Location 3'}
					criteria={'New Diabetic'} 
					onClickLink = { spyOnClick }
				/>,
				container
			)
			let anchor = container.querySelector('a')
			anchor.setAttribute('href', href)
			//anchor.dispatchEvent(new MouseEvent("click", { bubbles: true }));
			Simulate.click(anchor)
		});
		expect(container.querySelector('a')).toBeDefined()
		expect(container.querySelector('a').getAttribute('onClick')).toBeNull()
		expect(spyOnClick).toHaveBeenCalledTimes(10)
	});
});
});

