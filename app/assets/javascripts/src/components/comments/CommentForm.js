import React from 'react'

export default class CommentForm extends React.Component {
  render() {
    return (
      <form className="commnetForm">
        <input type="text" placeholder="Yout name"></input>
        <input type="text" placeholder="Say something"></input>
        <input type="submit" value="post"></input>
      </form>
    )
  }
}
