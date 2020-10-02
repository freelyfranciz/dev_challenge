import React from 'react';
import { render, screen } from '@testing-library/react';
import Topic from './Topic.js';

const postVar = {
    title: "test title",
    ups: 100,
    author:"test",
    num_comments: 100
}
const rank = 1;

test('loads and displays title', async () => {
    render()
        {return (<Topic posts={postVar} rank={rank} />);}
      
    expect(screen.getByRole('postTitle')).toHaveTextContent('test title');
    expect(screen.getByRole('ups')).toHaveTextContent(100);
    expect(screen.getByRole('author')).toHaveTextContent('test');
   
  })