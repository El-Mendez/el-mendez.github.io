/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ScrollingSubtitles from './index';

describe('ScrollingSubtitles', () => {
  it('should mount correctly', () => {
    const wordList = ['a', 'b', 'c', 'd'];
    render(<ScrollingSubtitles subtitlesList={wordList} />);
  });
});
