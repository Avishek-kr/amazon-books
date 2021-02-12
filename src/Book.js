import React from 'react'

const Book = ({img,title,author})=>{
    const reference=()=>{
      console.log(author)
    }
    // const {img, title, author, key}=props.book;
    return <section className='book' onMouseOver={()=>{
      console.log(title)
    }}>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={reference}>reference</button>
    </section>
  }

export default Book
