import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<Contact/>);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact/>);
        expect(asFragment()).toMatchSnapshot();
    });

    // h1 tag
    it('h1 tag', () => {
        const { getByTestId } = render(<Contact/>);
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
    });

    // button tag
    it('button tag', () => {
        const { getByTestId } = render(<Contact/>);
        expect(getByTestId('button')).toHaveTextContent('Submit');
    })
})