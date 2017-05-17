import React, { Component } from 'react';

class Tweet extends Component {

  contentAndHashTags() {
    var hashes = this.props.tweet.hashtag_names.map((hashtag) => "#"+hashtag )
    return this.props.tweet.content + " " + hashes.join(" ")
  }

  render() {
    return (
      <ul>
      <li className="tweet">
        <img className="avatar" src={this.props.tweet.avatar_url} alt=""></img>
        <div className="tweet-content">
          <p>
            <span className="full-name">{this.props.tweet.username}</span>
            <span className="username">{this.props.tweet.handle}</span>
            <span className="timestamp">{this.props.tweet.created_at}</span>
          </p>
          <p>{this.contentAndHashTags()}</p>
        </div>
      </li>
    </ul>
    )
  }

}

export default Tweet
