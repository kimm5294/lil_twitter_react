import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <section>
        <header id="top-nav">
          <div id="brand">Lil' Twitter API</div>
          <form id="search-form">
            <input id="search" type="text" name="query"></input>
          </form>
          <i className="fa fa-search"></i>
        </header>

        <section className="container">
          <section id="tweet-box">
            <p id="tweet-box-title">Compose New Tweet</p>
            <form id="tweet-form">
              <textarea id="new-tweet" cols="30" rows="5" maxlength="140" name="tweet"></textarea>
              <input type="submit" value="Tweet"></input>
            </form>
          </section>

          <section id="trends-container">
            <h3>Trends</h3>
            <ul>
              <li>filler</li>
            </ul>
          </section>

          <section id="tweets-container">
            <h3>Tweets</h3>
            <ul>
              <li className="tweet">
                <img className="avatar" src="https://pbs.twimg.com/profile_images/2858734172/db7da718fd369eba6184973631d7d84a_bigger.jpeg" alt=""></img>
                <div className="tweet-content">
                  <p>
                    <span className="full-name">Sam Samskies</span>
                    <span className="username">@SamSamskies</span>
                    <span className="timestamp">- 6m</span>
                  </p>
                  <p>My latest contribution to the advancement of the human race. I present to you ver 0.0.1 of http://mileyroids.com/  #Mileyroids #miley haha :)</p>
                </div>
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  }
}

export default App;
