import TestRenderer from 'react-test-renderer'
import React from 'react'
import { SimpleLabel } from '../SimpleLabel'
describe('Simple Label Tests', () => {
	it('Simple Label T1', () => {
		const tree = TestRenderer.create(
            <SimpleLabel title='Simple Label' />
		).toJSON()
		expect(tree).toMatchSnapshot()
	})
})