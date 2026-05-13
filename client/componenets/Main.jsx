import MixPlayer from './MixPlayer.jsx';
import About from './About.jsx';
import Reviews from './Reviews.jsx';
import GalleryImage from './GalleryImage.jsx';
import Home from './Home.jsx';
import BookingForm from './BookingForm.jsx';
import bookingPhoto from '../assets/bookingPhoto.png';

export default function Main() {
    return (
        <>
            <div id="home">
                <Home />
            </div>
            <div id="about" className="aboutContainer">
                <About />
            </div>
           
                <div id="bookingForm">
              
                    <BookingForm />
                </div>
          
            <div id="reviews" className="reviewsComponent">
                <Reviews />
            </div>
            <div id="mixPlayer">
                <MixPlayer />
            </div>
            <div id="galleryImage">
                <GalleryImage />
            </div>
        </>
    );
}
