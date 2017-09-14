import React from 'react';
import Link from '../src/mycomp/MyButton';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
	const component = renderer.create(
		<Link  />
	);
//	let tree = component.toJSON();
//	component.find('button').simulate('click')
//	expect(component.props.onClick()).toMatchSnapshot();

});