import { useState, useRef } from 'react';
import './style.css';
import the_knot_logo from '../assets/the_knot_logo.png';
import TK_BOW_2024_Badge from '../assets/TK_BOW_2024_Badge.png';
import BOW2026 from '../assets/2026BOW.png';
import BOW25 from '../assets/BOW25.png';

const reviewsData = [
    {
        id: 1,
        text: `Quite frankly, we can't say enough good things about Bentley and the way he and his team showed up and performed at our wedding. He was exceptionally kind, helpful and accommodating and the music was next level. Good music was of high importance to us at the celebration and Bentley far exceeded our expectations and more guests than I can count have reached out to express how unbelievably good the DJ was! I would recommend his services to anyone.`,
        attribution: '— Paul J.',
    },
    {
        id: 2,
        text: `Bentley is one of my favorite DJs I've used for my events. His professionalism, good energy, and manners are just the cherry on top of the good music and vibe he sets. I throw upscale après ski parties at a variety of venues in Park City such as Pendry hotel, a team USA Olympic party, house parties and more with DJ Bentley. All venues have since requested his contact to do future business with.`,
        attribution: '— Jen F.',
    },
    {
        id: 3,
        text: `We cannot recommend DJ Bentley highly enough!! From the very first conversation, he was professional, attentive, and genuinely invested in making our wedding day unforgettable. He took the time to understand our style, music preferences, and the vibe we wanted, and then executed it flawlessly. The dance floor was packed from start to finish...our guests are still raving about how much fun they had! He read the room perfectly, kept the energy high, and seamlessly mixed songs across genres so everyone, from our youngest friends to our grandparents, felt included. To top it off, Bentley even stayed for our impromptu after party and kept the energy going all night. His dedication and passion truly went above and beyond, making the entire experience one we'll never forget!`,
        attribution: '— Kylie K.',
    },
];

function Reviews() {
    const [activeIndex, setActiveIndex] = useState(0);
    const cardGridRef = useRef(null);

    const handleDotClick = (index) => {
        const grid = cardGridRef.current;
        if (!grid) return;
        const cardWidth = grid.offsetWidth;
        grid.scrollTo({
            left: cardWidth * index,
            behavior: 'smooth',
        });
        setActiveIndex(index);
    };

    const handleScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        const cardWidth = e.target.offsetWidth;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
    };

    function navigateToTheKnotReviews() {
        window.open(
            'https://www.theknot.com/marketplace/dj-bentley-park-city-ut-2064480',
        );
    }

    return (
        <div className="reviews-container">
            <h1 className="reviews-header">Awards & Reviews</h1>

            <div className="reviews-awards-container">
                <div className="badgeContainer">
                    <img
                        width={130}
                        src="https://www.rockymountainbride.com/wp-content/uploads/2026/01/2026-Badges14.png"
                        alt="Rocky Mountain Bride Featured Vendor"
                    />
                    <img width={100} src={BOW2026} />
                    <img width={100} src={BOW25} />
                    <img width={100} src={TK_BOW_2024_Badge} />
                    <img width={100} src={the_knot_logo} />
                </div>
                <p>
                    DJ Bentley is proud to be a multi-year winner of{' '}
                  <a      href="https://www.theknot.com/marketplace/dj-bentley-park-city-ut-2064480"
                        target="_blank"
                        rel="noreferrer"
                        className="reviewsLink"
                    >
                        The Knot
                    </a>{' '}
                    Best of Weddings, an award recognizing the top-rated wedding
                    professionals based on reviews from real couples. He has
                    also been featured by{' '}
                    
                    <a    href="https://www.rockymountainbride.com"
                        target="_blank"
                        rel="noreferrer"
                        className="reviewsLink"
                    >
                        Rocky Mountain Bride
                    </a>{' '}
                    as a trusted wedding vendor known for creating fun,
                    elevated, and unforgettable wedding experiences throughout
                    the region.
                </p>
            </div>

            <h2 className="reviews-recent-reviews-header">Recent Reviews</h2>

            <div className="reviews-scroll-wrapper">
                <div
                    className="reviews-card-grid"
                    onScroll={handleScroll}
                    ref={cardGridRef}
                >
                    {reviewsData.map((review) => (
                        <div key={review.id} className="reviews-recent-reviews">
                            <p style={{ color: '#56575C' }}>{review.text}</p>
                            <p className="reviews-attribution">{review.attribution}</p>
                        </div>
                    ))}
                </div>

                <div className="reviews-dots">
                    {reviewsData.map((_, i) => (
                        <span
                            key={i}
                            className={`reviews-dot ${i === activeIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(i)}
                        />
                    ))}
                </div>
            </div>

            <button className="reviewsBtn" onClick={navigateToTheKnotReviews}>
                Additional Reviews
            </button>
        </div>
    );
}

export default Reviews;