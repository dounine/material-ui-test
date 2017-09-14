import React from 'react';
import {shallow} from 'enzyme';
import Link from '../src/mycomp/Link';

test('CheckboxWithLabel changes the text after click', () => {
	// Render a checkbox with label in the document
	const checkbox = shallow(
		<Link page="http://www.facebook.com">Facebook</Link>
	);

	expect(checkbox.text()).toEqual('Facebook');

//	checkbox.find('input').simulate('change');

//	expect(checkbox.text()).toEqual('On');
});