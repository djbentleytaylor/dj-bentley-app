/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "https://widget.mixcloud.com/media/js/widgetApi.js";

const MixPlayer = () => {
    const [mixes, setMixes] = useState([]);
    const [selectedMixIndex, setSelectedMixIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://api.mixcloud.com/djbentleytaylor/cloudcasts"
                );
                const data = response.data.data;
                const mixTiles = data.map((mix) => ({
                    name: mix.name,
                    url: mix.url,
                    pictures: mix.pictures && mix.pictures["320wx320h"],
                }));

                setMixes(mixTiles);
                // console.log(mixTiles);
            } catch (error) {
                console.error("Error fetching Mixcloud data:", error);
            }
        };
        fetchData();
    }, []);

    const handleMixClick = (index) => {
        window.onbeforeunload = () => undefined;
        setSelectedMixIndex(index);
    };

    // slider settings

    function CustomPrevArrow({ onClick }) {
        return (
            <div className="custom-prev" onClick={onClick}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
        );
    }

    const CustomNextArrow = ({ onClick }) => (
        <div className="custom-next" onClick={onClick}>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="musicPlayer">
            <h1>Mixes</h1>
            <div className="carousel">
                <Slider
                    style={{ display: "flex", alignItems: "center" }}
                    {...settings}
                >
                    {mixes.map((mix, index) => (
                        <div
                            className="mix-box"
                            key={index}
                            onClick={() => handleMixClick(index)}
                        >
                            <div className="container">
                                <img
                                    id={`my-widget-image-${index}`}
                                    onClick={() => handleMixClick(index)}
                                    src={mix.pictures}
                                    alt={mix.name}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
                <iframe
                    id={"my-widget-iframe"}
                    onClick={() => handleMixClick(index)}
                    sandbox="allow-same-origin allow-scripts "
                    width="100%"
                    height="30"
                    title={mixes[selectedMixIndex]?.name}
                    src={`https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=${encodeURIComponent(
                        mixes[selectedMixIndex]?.url || ""
                    )}`}
                    frameBorder="0"
                    style={{
                        display: "block",
                        width: "100%",  
                        height: "100%",
                        margin: "auto",
                    padding: "0",   
                    }}
                    
                ></iframe>
            </div>
        </div>
    );
};

export default MixPlayer;
