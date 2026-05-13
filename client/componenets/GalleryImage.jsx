import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewGalleryPhoto from '../assets/NewGalleryPhoto.jpg';

export default function GalleryImage() {
const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth <= 900);

useEffect(() => {
    const handleResize = () => {
        setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 900);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);
    return (
        <div
            className="galleryImage"
            style={{
                backgroundImage: `url(${NewGalleryPhoto})`,
                backgroundAttachment: isTablet ? 'scroll' : 'fixed',
            }}
        >
            <Link to="/gallery">
                <h1 className="galleryH1">View Gallery</h1>
            </Link>
        </div>
    );
}
