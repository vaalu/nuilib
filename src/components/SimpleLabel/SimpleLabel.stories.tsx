import React from 'react'
import { storiesOf } from '@storybook/react'
import { SimpleLabel } from './SimpleLabel'
storiesOf('Atom/SimpleLabel', module)
	.add('Label-1', () => <SimpleLabel title='Label 1' />)
