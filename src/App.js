import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Content from './Content'
import Nav from './Navigation/Nav'

class App extends React.Component {

  state = {
    posts: [{title: "Title", content: "This is cool content"},
    {title: "Help", content: "I am trapped in a flesh prison"},
    {title: "Not my Body", content: "An actual prison made of flesh"},
    {title: "I am unsure How I got Here", content: "Please rescue me"},
    {title: "New Bike Lanes to be Installed", content: "This will alleviate traffic"}]
  }

  addToBlog = e => {
    e.preventDefault();
    const newTitle = e.target.title.value;
    const newContent= e.target.content.value;
    const oldPosts = [...this.state.posts];
    const postToAdd = {title: newTitle, content: newContent};

    oldPosts.unshift(postToAdd)


    this.setState({posts: oldPosts})
    console.log('submitted:', oldPosts)
  }

  render (){
    return (
      <div className="App">
        
        <Router>
          <div>
          <Nav/>
            <Content posts={this.state.posts} addToBlog={this.addToBlog}/>
          </div>
        </Router>
      
      </div>
    );
  }
}

export default App;
