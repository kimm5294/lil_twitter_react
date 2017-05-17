import React, { Component } from 'react';
import Tweet from './Tweet.js'

class Timeline extends Component {

  constructor(args) {
    super(args);
    this.state = {
      tweets: []
    }
  }

  componentWillMount() {
    fetch("http://localhost:3002/tweets/recent")
    .then((r) => r.json())
    .then((data) => {
      this.setState((prevState, props) => {
        return {tweets: data};
      });
    })
  }

  render() {
    return (
      <div>
        {this.state.tweets.map((tweet, i) =>
          <Tweet key={i} tweet={tweet}/>
        )}
      </div>
    )
  }

}

export default Timeline
