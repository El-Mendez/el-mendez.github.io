/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './index';

describe('Contact', () => {
  it('should redirect to my github profile', () => {
    render(<Contact index={0} />);
    expect(screen.getByTestId('github').href).toBe('https://github.com/El-Mendez');
  });
});
