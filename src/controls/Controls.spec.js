// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Controls from './Controls.js';

const mock = jest.fn();

describe('<Controls />', () => { 
    it('Should call the toggleLocked function passed as prop to Unlock the gate', () => {
        const { getByText } = render(<Controls locked = {true} closed={true} toggleLocked={mock} />)
        fireEvent.click(getByText(/Unlock Gate/i))
        expect(mock).toHaveBeenCalledTimes(1)
    })
    it('Should call the toggleClosed function passed as prop to Open an unlocked closed gate', () => {
        const { getByText } = render(<Controls locked={false} closed={true} toggleLocked={mock} toggleClosed={mock} />);
        fireEvent.click(getByText(/Open Gate/i));
        expect(mock).toHaveBeenCalledTimes(1);
        mock.mockClear();
    })
    it('Should call the toggleClosed function passed as prop to Close an open gate', () => {
        const { getByText } = render(<Controls locked={false} closed={false} toggleLocked={mock} toggleClosed={mock} />);
        fireEvent.click(getByText(/Close Gate/i));
        expect(mock).toHaveBeenCalledTimes(1); 
        mock.mockClear();
    })
    it('Should call the toggleLocked function passed as prop to Lock an unlocked closed gate', () => {
        const { getByText } = render(<Controls locked={false} closed={true} toggleLocked={mock} toggleClosed={mock} />);
        fireEvent.click(getByText(/Lock Gate/i));
        expect(mock).toHaveBeenCalledTimes(1);
        mock.mockClear(); 
    });
})
