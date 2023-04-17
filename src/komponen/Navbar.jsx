import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
            <ul>
                <li class='about'><a href='#about'>About</a></li>
                <li class='experience'><a href='#experience'>Experience</a></li>
                <li class='education'><a href='#education'>Education</a></li>
                <li class='skills'><a href='#skills'>Skills</a></li>
                <li class='interests'><a href='#interests'>Interests</a></li>
                <li class='awards'><a href='#awards'>Awards</a></li>
            </ul>
            </nav>
            )
        }
    }
    
export default Navbar