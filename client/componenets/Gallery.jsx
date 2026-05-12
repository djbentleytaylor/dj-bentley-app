import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import Photo from "./Photo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ClickOutside from "./ClickOutside";
import photo1 from "../assets/firstPhoto.png"
import photo2 from "../assets/DBBA205D-BC33-4022-AC5D-45AE80FC6BC6.jpeg"
import photo3 from "../assets/_peppernix2221-3592.jpg"
import photo4 from "../assets/DSC03286.jpg"
import photo5 from "../assets/F7B2E57D-BE4F-45B2-9DD0-EF98A062A8A8.jpeg"
import photo6 from "../assets/Header_Bio_Photo.jpeg"
import photo7 from "../assets/peppernix2.jpg"
import photo8 from "../assets/peppernix3.jpg"
import photo9 from "../assets/IMG_62712.jpeg"
import photo10 from "../assets/Moet-Hennessy-3-11-9145.jpg"
import photo11 from "../assets/Moet-Hennessy-3-18-9135.jpg"
import photo12 from "../assets/PhotoFeb01.jpg"
import photo13 from "../assets/PhotoFeb01_2.jpg"
import photo14 from "../assets/Screenshot2023.png"
import photo15 from "../assets/unnamed1.jpg"
import photo16 from "../assets/unnamed.jpg"
import photo17 from "../assets/cheers.jpg"
import photo18 from "../assets/indoorWedding.jpg"
import photo19 from "../assets/landscapeHeadshot.jpg"
import photo20 from "../assets/lights1.jpg"
import photo21 from "../assets/lights2.jpg"
import photo22 from "../assets/moet.jpg"
import photo23 from "../assets/parkCityStage.jpg"
import photo24 from "../assets/portraitHeadshot.jpg"
import photo25 from "../assets/snow.jpg"
import photo26 from "../assets/stage.jpg"
import photo27 from "../assets/sundance2024.jpg"
import photo28 from '../assets/terrasse.jpg'
import photo29 from "../assets/vintageRoom.jpg"
import photo30 from "../assets/sittingHeadshot.jpg"
import Navbarlogo from "../assets/NewLogo.png"

export default function Gallery() {

    const photosArr = [
        photo1, photo3, photo5, photo6, photo7, photo2, photo8, photo9, photo10, photo13, photo14, photo15, photo16, photo17, photo19, photo21, photo22, photo23, photo25, photo27, photo28, photo29, photo30
    ]
    //
    const [showCarousel, setShowCarousel] = useState(false)
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handlePhotoClick = async (index) => {
        await setSelectedPhotoIndex(index)
        setShowCarousel(prevShow => !prevShow)
    }

    const closeCarousel = () => {
        // setShowCarousel(false)
        setSelectedPhotoIndex(null)
        console.log("carousel closed")
    }


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
            <div className='galleryNavbar'>
                <nav className='galleryNav'>
                    <img src={Navbarlogo} className='logo' />
                    <div className="galleryNavItems">
                        <Link className="galleryLink" to="/">Back To Main Page</Link>
                    </div>
                </nav>
            </div>
            <div className="Gallery-Images">
                {photosArr.map((str, index) => (
                    <Photo className="squarePhoto" key={str} url={str} handleClick={() => handlePhotoClick(index)} />
                ))}

            </div>
            {showCarousel &&
                <ClickOutside onClick={closeCarousel} className="carouselContainer">

                    <Slider style={{ display: 'flex', alignItems: 'center', justifyContent: "center", maxWidth: '80vw', backgroundColor: "rgba(240, 239, 238, 0.90)", padding: "5vh 0 5vh 0" }} {...settings}>
                        {photosArr.map((str, index) => (
                            <Photo className="carouselPhoto" key={index} url={str} />
                        ))}
                    </Slider>
                </ClickOutside>

            }
        </>
    )
}