/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cover from './index';

describe('La portada (Cover)', () => {
  it('should not crash', () => {
    render(<Cover index={0} />);
    expect(true).not.toBeNull();
  });

  it('should contain the title', () => {
    render(<Cover index={0} />);
    expect(screen.getByText('Pablo Méndez')).not.toBeNull();
  });
});
