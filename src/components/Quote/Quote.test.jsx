/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Quote from './index';

describe('Quote', () => {
  it('should render correctly', () => {
    render(<Quote index={0} />);
    expect(true).not.toBeNull();
  });

  it('should show the main quote', () => {
    render(<Quote index={0} quote="Hello Jest" author="UNKNOWN" />);
    expect(screen.getByText('Hello Jest')).not.toBeNull();
  });

  it('should show the author of the quote', () => {
    render(<Quote index={0} quote="Hello Jest" author="UNKNOWN" />);
    expect(screen.getByText('UNKNOWN')).not.toBeNull();
  });
});
