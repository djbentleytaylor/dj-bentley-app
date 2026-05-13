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
import photo4 from "../assets/_peppernix2221-3698_websize.jpg"
import photo5 from "../assets/F7B2E57D-BE4F-45B2-9DD0-EF98A062A8A8.jpeg"
import photo6 from "../assets/Header_Bio_Photo.jpeg"
import photo7 from "../assets/peppernix2.jpg"
import photo8 from "../assets/peppernix3.jpg"
import photo9 from "../assets/IMG_62712.jpeg"
import photo10 from "../assets/Moet-Hennessy-3-11-9145.jpg"
import photo11 from "../assets/F7B2E57D-BE4F-45B2-9DD0-EF98A062A8A8.jpeg"
import photo12 from "../assets/6651b825-cbd4-4a39-8e59-9c1bdeeac1f9~sc_513.770.webp"
import photo13 from "../assets/PhotoFeb01_2.jpg"
import photo14 from "../assets/Screenshot2023.png"
import photo15 from "../assets/unnamed1.jpg"
import photo16 from "../assets/unnamed.jpg"
import photo17 from "../assets/cheers.jpg"
import photo18 from "../assets/Bentley-Headshots-2024-27.jpg"
import photo19 from "../assets/landscapeHeadshot.jpg"
import photo20 from "../assets/Copy of IMG_1972.jpeg"
import photo21 from "../assets/lights2.jpg"
import photo22 from "../assets/moet.jpg"
import photo23 from "../assets/parkCityStage.jpg"
import photo24 from "../assets/D61A1964.jpg"
import photo25 from "../assets/snow.jpg"
import photo26 from "../assets/D61A2034-2.jpg"
import photo27 from "../assets/sundance2024.jpg"
import photo28 from '../assets/terrasse.jpg'
import photo29 from "../assets/vintageRoom.jpg"
import photo30 from "../assets/sittingHeadshot.jpg"
import photo31 from '../assets/IMG_0391.jpg'
import photo32 from '../assets/IMG_0681.jpg'
import photo33 from '../assets/IMG_1130.jpg'
import photo34 from '../assets/IMG_1996.jpg'
import photo35 from '../assets/IMG_2985.jpg'
import photo36 from '../assets/IMG_3047.jpg'
import photo37 from '../assets/IMG_3165.jpg'
import photo38 from '../assets/IMG_3326.jpg'
import photo39 from '../assets/IMG_3327.jpg'
import photo40 from '../assets/IMG_3846.jpg'
import photo41 from '../assets/IMG_4217.jpg'
import photo42 from '../assets/img4957.jpg'
import photo43 from '../assets/img55662.jpg'
import photo44 from '../assets/MarleyColeTheReception0082.jpg'
import photo45 from '../assets/MarleyColeTheReception0325.jpg'
import photo46 from '../assets/MarleyColeTheReception0395.jpg'
import photo47 from '../assets/MarleyColeTheReception0396.jpg'
import photo48 from '../assets/MarleyColeTheReception0401.jpg'
import photo49 from '../assets/nik1948.jpg'
import photo50 from '../assets/ss511803.png'
import photo51 from '../assets/ss5111019.png'
import photo52 from '../assets/ss05111019.png'

import Navbarlogo from "../assets/NewLogo.png"

export default function Gallery() {

const photosArr = [
    photo1, photo22, photo48, photo14, photo7, photo19, photo45, photo31, photo3, photo40, photo28, photo2, photo20, photo51, photo46, photo12, photo35, photo47, photo24, photo41, photo5, photo30, photo43, photo15, photo39, photo49, photo23, photo10, photo34, photo27, photo32, photo18, photo26, photo4, photo6, photo8, photo9, photo11, photo13, photo16, photo17, photo21, photo25, photo29, photo33, photo36, photo37, photo38, photo42, photo44, photo50, photo52
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