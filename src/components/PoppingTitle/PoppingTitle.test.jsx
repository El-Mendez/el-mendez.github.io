/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PoppingTitle from './index';

describe('Popping Title', () => {
  it('should increased size at spawning', () => {
    const element = <PoppingTitle.H1 text="Hello Jest" />;
    render(element);
    const title = screen.getElementsByTagName('h1')[0];
    expect(title).toHaveStyle({ transform: 'scale(1.1)' });
  });

  it('should have increased size on mouse hover', () => {
    const element = <PoppingTitle.H1 text="Hello Jest" />;
    render(element);
    const title = screen.getElementsByTagName('h1')[0];
    fireEvent.mouseEnter(element);
    expect(title).toHaveStyle({ transform: 'scale(1.1)' });
  });

  it('should decrease size when time has passed and it is not hovered', () => {
    const element = <PoppingTitle.H1 text="Hello Jest" />;
    render(element);
    jest.useFakeTimers();
    const title = screen.getElementsByTagName('h1')[0];

    setTimeout(() => {
      expect(title).toHaveStyle({ transform: 'scale(1)' });
    }, 2000);
  });
});
