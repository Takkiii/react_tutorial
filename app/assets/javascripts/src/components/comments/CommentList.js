import React from 'react'
import Comment from './Comment'

const data = [
  {
    id: 1,
    author: 'Takkiii',
    text: 'My name is Takkiii'
  },
  {
    id: 2,
    author: 'Rokkiii',
    text: 'My name is Rokkiii'
  }
]

export default class CommentList extends React.Component {
  render() {
    const commentNodes = data.map((comment) => {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      )
    })
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    )
  }
}
