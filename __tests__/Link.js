import React from 'react';
//import expect from 'expect';
import Link from '../src/mycomp/Link';
import renderer from 'react-test-renderer';

describe('Shallow Rendering', function () {
	it('App\'s title should be Todos', function () {
	const component = renderer.create(
		<Link page="http://www.facebook.com">Facebook</Link>
	);
	let tree = component.toJSON();
	
	expect(tree.type).not.toBe("b");
	
	expect(tree).toMatchSnapshot();

	});
});