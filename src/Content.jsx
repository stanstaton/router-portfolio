import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Projects from './Pages/Projects'


const Content = props => {


    return (
        <div>
            <main>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/blog" render={
                ()=> <Blog posts={props.posts} addToBlog={props.addToBlog}/>
            }/>
            </main>
        </div>
    )
}


export default Content