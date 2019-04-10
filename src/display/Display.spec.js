// Test away! first commit
import React from 'react';
import { render } from 'react-testing-library';
import Display from './Display.js';

describe('<Display />', () => {
    it('Should show Open when open', () => {
        const { getByText } = render(<Display locked={false} closed={false} />);
        const status = getByText(/open/i);
        expect(status).toBeTruthy();
    })
    it('Should show Closed when closed', () => {
        const { getByText } = render(<Display locked={false} closed={true} />);
        const status = getByText(/closed/i);
        expect(status).toBeTruthy();
    })
    it('Should show Locked when locked', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        const status = getByText(/locked/i);
        expect(status).toBeTruthy();
    })
    it('Should show Unlocked when unlocked', () => {
        const { getByText } = render(<Display locked={false} closed={true} />);
        const status = getByText(/unlocked/i);
        expect(status).toBeTruthy();
    })
})