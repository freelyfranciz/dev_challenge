import React from 'react'

export default function Topic({data : {author, num_comments, title, permalink, ups}}) {
    return (
        <div>
          author: {author} <br/>
          comments:{num_comments}<br/>
          title: {title}{permalink}<br/>
          ups: {ups}<br/>
        </div>
    )
}
