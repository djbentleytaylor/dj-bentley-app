/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import bioPhoto from '../assets/dj-photo.png';

const About = () => {
    const [bio, setBio] = useState('');

    useEffect(() => {
        axios
            .get('https://api.mixcloud.com/djbentleytaylor')
            .then((res) => {
                const data = res.data.biog;
                setBio(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="aboutPage">
            <div className="aboutImage">
                {/* <img className="bioImage" src={bioPhoto} /> */}
            </div>
            <div className="aboutContent">
            

                <div className="aboutBio">
                      <h1 style={{color: '#56575C'}}>About</h1>
                    <p style={{ fontWeight: 500, marginBottom: '0.5rem', color: '#56575C' }}>
                        Services Offered:
                    </p>
                    <ul
                        style={{
                            marginBottom: '1.5rem',
                            paddingLeft: '1.25rem',
                            color: '#56575C'
                        }}
                    >
                        <li>
                            Weddings
                        </li>
                        <li>Corporate Events</li>
                        <li>All-Vinyl DJ Sets</li>
                        <li>Private Celebrations</li>
                        <li>Social Events</li>
                    </ul>

                    <p style={{color: '#56575C'}}>
                        Bentley Taylor, better known as DJ Bentley, has been
                        keeping dance floors packed for over 15 years. Known for
                        reading the crowd and creating unforgettable
                        experiences, Bentley combines expert music curation,
                        seamless event flow, and a polished, professional
                        approach to create events guests will remember long
                        after the night ends.
                    </p>

                    <p style={{color: '#56575C'}}>
                        From luxury weddings and private celebrations to
                        corporate events, après-ski parties, and all-vinyl DJ
                        sets, DJ Bentley brings a versatile and personalized
                        approach to every event. As a full-time DJ, he works
                        closely with each client to create a custom experience
                        that matches the vibe of the room and keeps guests
                        engaged from start to finish.
                    </p>

                    <p style={{color: '#56575C'}}>
                        Be sure to check out his <a href="#reviews">reviews</a>{' '}
                        to hear directly from past clients about their
                        experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
