import React from "react"
import { Link } from 'react-router-dom';
import NewGalleryPhoto from "../assets/NewGalleryPhoto.jpg"

export default function GalleryImage() {

    return (
        <div className="galleryImage">
            <Link to="/gallery" >
                <h1 className="galleryH1">View Gallery</h1>
            </Link>

            <img className="backgroundImage" src={NewGalleryPhoto}></img>
        </div>
    )
}