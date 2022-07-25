import React from 'react'
import'../styles/List.css';

export default function List({title, author, content, published_on, publication}) {
  return (
      <>
      <div className='card-div'>
      <div className='cardName'>{title}</div>
      <div>Author:{author}</div>
      <div>{content}</div>
      <div>Publication: {publication}</div>
      <div>Published On: {published_on};</div>
      </div>
      </>
    )
}
