import React from 'react';
import { render, screen } from '@testing-library/react';
import Topic from './Topic';

const postVar = {
    title: "test title",
    num_comments: 100,
    ups: 100,
    author:"test"
}
const rank = 1;

test('loads and displays title', async () => {
    render(<Topic posts={postVar} rank={rank} />);  
    expect(screen.getByRole('postTitle')).toHaveTextContent('test title');
    expect(screen.getByRole('numComments')).toHaveTextContent(100);
    expect(screen.getByRole('ups')).toHaveTextContent(100);
    expect(screen.getByRole('author')).toHaveTextContent('test');
  })