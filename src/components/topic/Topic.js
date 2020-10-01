import React from 'react'
import styled from 'styled-components';

const redditUrl = "https://www.reddit.com/";

//styled compnents for Topic.js 
const Item = styled.div`
      margin: 10px;
      border-radius: 10px;
      box-shadow: 0px 5px 20px 0px #000000a6;
      background: ${props => (getCss(props.score))}
      `;
const Img = styled.img`
      border-radius: 10px 10px 0px 0px;
      width: 300px;
      height: 300px;`;
const Details = styled.div`
      opacity: 0.5;
      padding: 5px 10px;
      color: #0a1603;
      display:flex;
      gap: 20px;
      flex-direction: column;`;
const DetailsFooter = styled.div` 
      display: flex;
      flex-direction: row;
      justify-content: stretch;`;
const DetailsHeader = styled.div` 
      display: flex;
      flex-direction: row;`;
const Upvotes = styled.div`margin-left: auto;`;

const getCss = (score) => {
  return score % 2 ? 'linear-gradient(#F5B041, #EB984E)' : 'linear-gradient(#7FB3D5, #85C1E9)';
}
const Author = styled.div`margin-left: auto;`;
const Title = styled.div` 
      height: 25px;
      max-width: 280px;`;

const vistPost = (permalink) => {
  window.open(`${redditUrl}${permalink}`, '_blank');
}

export default function Topic({ posts: { author, num_comments, title, permalink, ups, url, score }, rank }) {
  return (
    <Item score={score} onClick={() => vistPost(permalink)}>
      <Img alt="tumbnail" src={url} onError={(e) => { e.target.onerror = null; e.target.src = "/images/snoo.jpg" }} />
      <Details>
        <DetailsHeader>
          <div>#{rank + 1}</div>
          <Author>{author}</Author>
        </DetailsHeader>
        <Title onClick={() => vistPost(permalink)}>{title}</Title>
        <DetailsFooter>
          <span>{num_comments} comments</span>
          <Upvotes>{ups} ups</Upvotes>
        </DetailsFooter>
      </Details>
    </Item>

  )
}
