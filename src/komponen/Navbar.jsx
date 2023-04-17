import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
            <ul>
                <li button class="btn"><a href='#about'>About</a></li>
                <li button class="btn"><a href='#experience'>Experience</a></li>
                <li button class="btn"><a href='#education'>Education</a></li>
                <li button class="btn"><a href='#skills'>Skills</a></li>
                <li button class="btn"><a href='#interests'>Interests</a></li>
                <li button class="btn"><a href='#awards'>Awards</a></li>
            </ul>
            </nav>
            )
        }
    }
    
export default Navbar