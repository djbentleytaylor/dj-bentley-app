import React from 'react';

import { Link } from 'react-router-dom';
import NewGalleryPhoto from '../assets/MarleyColeTheReception0325.jpg';

export default function GalleryImage() {
    return (
        <div
            className="galleryImage"
            style={{ backgroundImage: `url(${NewGalleryPhoto})` }}
        >
            <Link to="/gallery">
                <h1 className="galleryH1">View Gallery</h1>
            </Link>
        </div>
    );
}