import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <section>
        <header id="top-nav">
          <div id="brand">Lil Twitter API</div>
          <form id="search-form">
            <input id="search" type="text" name="query"></input>
          </form>
          <i className="fa fa-search"></i>
        </header>

        <section className="container">
          <section id="tweet-box">
            <p id="tweet-box-title">Compose New Tweet</p>
            <form id="tweet-form">
              <textarea id="new-tweet" cols="30" rows="5" maxLength="140" name="tweet"></textarea>
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

          </section>

        </section>
      </section>
    );
  }
}

export default App;
