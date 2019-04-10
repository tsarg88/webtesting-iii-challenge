// Test away
import React from 'react';
import { render } from 'react-testing-library';
import Dashboard from './Dashboard.js';

describe('<Dashboard/>', () => {
    it('Should render without crashing', () => {
        render(<Dashboard/>)
    })
})