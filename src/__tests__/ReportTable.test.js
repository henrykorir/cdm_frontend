import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ReportTable from '../components/ReportTable'

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
describe('ReportTable', () => {
	it('does not render without data provided',() =>{
		act(() =>{
			render(<ReportTable />, container);
		})
		expect(container.textContent).toBe("No data available now");
		expect(container.querySelector('table')).toBeNull();
	});
	it('renders data',() =>{
		act(() =>{
			render(
				<ReportTable 
					title={'Test data'}
					data={[{test:'I am data'}]}
				/>, 
				container
			);
		})
		expect(container.textContent).not.toBe("No data available now");
		expect(container.querySelector('table')).toBeDefined();
	});
	it('renders an anchor link when it recieves criteria data',() =>{
		const data =[{
			'Month':'2021-5',
			'Location': 'Location 84',
			'New Hypertensive': 2,	
			'Known Hypertensive': 5,
			'New Diabetic': 4,
			'Known Diabetic': 9,
			'Hypertensive and Diabetic': 7
		}];
		const onClickLink = jest.fn();
		act(() =>{
			render(
				<ReportTable 
					title={'Test data'}
					data={data}
					isCriteria={ true }
					onClickLink={ onClickLink }
				/>, 
				container
			);
		});
		expect(container.textContent).not.toBe("No data available now");
		expect(container.querySelector('a')).toBeDefined();
	});
});