import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, renderIntoDocument, Simulate } from "react-dom/test-utils";


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
		it('responds to clicks', done => {
			const spyOnClickLink = jest.fn(() =>(
				{
					status: 200,
					rows:[
						'name': 'patient 6',
						'Encounter Date': '2021-05-05T00:00:00.000Z',
						'Location': 'Location-3',
						'New Diabetic': 'New',	
						'Gender': 'F',
						'Age': 3
					],
					message:'category details successfully fetched'
				}
			)); 
			act( ()=>{
				render(
					<Link 
						text={'1'}
						location={'Location 3'}
						criteria={'New Diabetic'} 
						onClickLink = { spyOnClickLink }
					/>,
					container
				)
				Simulate.click(container.querySelector('a'));
			});
			expect(container.querySelector('a')).toBeDefined()
			expect(container.querySelector('a').getAttribute('href')).not.toBeNull()
			console.log(done)
			expect(spyOnClickLink).toBeCalled()
		});
	});
});
