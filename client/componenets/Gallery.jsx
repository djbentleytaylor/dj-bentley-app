import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Photo from './Photo';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Navbarlogo from '../assets/NewLogo.png';

export default function Gallery() {
    const [photos, setPhotos] = useState([]);
    const [showCarousel, setShowCarousel] = useState(false);
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        fetch('https://res.cloudinary.com/dptm7uamd/image/list/gallery.json')
   .then(res => res.json())
    .then(data => {
        const sorted = data.resources.sort((a, b) =>
            new Date(b.created_at) - new Date(a.created_at)
        );

        const urls = sorted.map(resource =>
            `https://res.cloudinary.com/dptm7uamd/image/upload/${resource.public_id}`
        );
        setPhotos(urls);
    })
    .catch(err => console.error('Error fetching gallery:', err));
    }, []);

    const handlePhotoClick = (index) => {
        setSelectedPhotoIndex(index);
        setShowCarousel(true);
        document.body.classList.add('modal-open');
    };

    const closeCarousel = () => {
        setShowCarousel(false);
        setSelectedPhotoIndex(null);
        document.body.classList.remove('modal-open');
    };

    const CustomPrevArrow = ({ onClick }) => (
        <div className="custom-prev" onClick={onClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>
    );

    const CustomNextArrow = ({ onClick }) => (
        <div className="custom-next" onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: selectedPhotoIndex,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        fade: true,
        accessibility: true,
    };

    return (
        <>
            <div className="galleryNavbar">
                <nav className="galleryNav">
                    <img src={Navbarlogo} className="logo" />
                    <div className="galleryNavItems">
                        <Link className="galleryLink" to="/">
                            Back To Main Page
                        </Link>
                    </div>
                </nav>
            </div>

            <div className="Gallery-Images">
                {photos.map((url, index) => (
                    <Photo
                        className="squarePhoto"
                        key={url}
                        url={url}
                        handleClick={() => handlePhotoClick(index)}
                    />
                ))}
            </div>

            {showCarousel && (
                <div className="lightbox-overlay">
                    <button className="lightbox-close" onClick={closeCarousel}>
                        &#x2715;
                    </button>
                    <div className="lightbox-inner">
                        <Slider {...settings}>
                            {photos.map((url, index) => (
                                <Photo
                                    className="carouselPhoto"
                                    key={index}
                                    url={url}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            )}
        </>
    );
}
