import React from 'react';
import { shallow } from 'enzyme';

import Display from '../components/Display/Display';

describe('<Display />', () => {
	it('renders without crashing', () => {
		shallow(<Display />);
	});

	it('should render a div', () => {
		const wrapper = shallow(<Display />);
		expect(wrapper.find('div.component-display').length).toBe(1);
	});

	it('should render a child div containing a value', () => {
		const wrapper = shallow(<Display />);
		expect(wrapper.children().length).toBe(1);
	})
});
