import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
            <ul>
                <li><a href='#about' class="active">About</a></li>
                <li><a href='#experience' class="active">Experience</a></li>
                <li><a href='#education' class="active">Education</a></li>
                <li><a href='#skills' class="active">Skills</a></li>
                <li><a href='#interests' class="active">Interests</a></li>
                <li><a href='#awards' class="active">Awards</a></li>
            </ul>
            </nav>
            )
        }
    }
    
export default Navbar