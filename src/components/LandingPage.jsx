import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import "../css/landing.css";
import { FaStar } from "react-icons/fa";
import Booking from './Booking';
import DocSuggestions from './DocSuggestions';

const LandingPage = () => {
    const { city, formData } = useParams();

    let actualData = null;
    if (formData) {
        actualData = JSON.parse(decodeURIComponent(formData));
    }

    const sliderRef = useRef(null);

    const handleScroll = () => {
        const container = sliderRef.current;
        if (container) {
            const scrollStep = 1; // Adjust this value for the step size

            container.scrollLeft += scrollStep;

            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                container.scrollLeft = 0;
            }
        }
    };
    
    useEffect(() => {
        const intervalId = setInterval(handleScroll, 50); // Adjust the interval duration based on your preference

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className='landing-page'>
                <div className="">
                    <div className="heading">
                        Get quick and lasting pain relief with FixHealth
                    </div>
                    <div className="rating">
                        5.0
                        <span className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                        <span className='fs-5'>(3,313 Google Reviews)</span>
                    </div>
                </div>
                {!city &&
                    <div className="booking-content">
                        <Booking />
                    </div>
                }
            </div>
            <section>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-xl-8 text-center">
                            <h3 className="fw-bold mb-4">Testimonials</h3>
                            <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                                Welcome to Fix Health! We are dedicated to providing high-quality healthcare services and ensuring a pain-free life for our patients.
                                Our team of expert physiotherapists is committed to delivering personalized care to meet your unique needs.
                            </p>
                        </div>
                    </div>

                    <div className="slider-container" ref={sliderRef}>
                        <div className="cardi">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt="User 1" />
                            <div className="cardi-content">
                                <h5 className="font-weight-bold">Ankith Sharma</h5>
                                <h6 className="font-weight-bold my-3">Engineer</h6>
                                <p className='tastimonials-stars'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                <p>Connecting the world, one website at a time.</p>
                            </div>
                        </div>

                        <div className="cardi">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp" alt="User 2" />
                            <div className="cardi-content">
                                <h5 className="font-weight-bold">Dr. Aarav Mehta</h5>
                                <h6 className="font-weight-bold my-3">Cardiologist at Max Heart Institute</h6>
                                <p className='tastimonials-stars'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                <p>"Dr. Mehta's expertise and caring nature put me at ease during my diagnosis. I couldn't be more grateful for her." - Aishwarya B.</p>
                            </div>
                        </div>

                        <div className="cardi">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp" alt="User 9" />
                            <div className="cardi-content">
                                <h5 className="font-weight-bold">Dr. Riya Singh</h5>
                                <h6 className="font-weight-bold my-3">Orthopedic Surgeon at Apollo Hospitals</h6>
                                <p className='tastimonials-stars'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                <p>"Dr. Singh's skillful surgery and post-operative care helped me regain mobility after my accident. Thank you, Doctor!" - Varun K.</p>
                            </div>
                        </div>

                        <div className="cardi">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp" alt="User 3" />
                            <div className="cardi-content">
                                <h5 className="font-weight-bold">Dr. Priya Sharma</h5>
                                <h6 className="font-weight-bold my-3">Dermatologist at Kaya Skin Clinic</h6>
                                <p className='tastimonials-stars'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                <p>"Dr. Sharma's personalized approach and gentle touch made my skin treatment a positive experience. My skin is glowing now!" - Anjali J.</p>
                            </div>
                        </div>
                        <div className="cardi">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp" alt="User 4" />
                            <div className="cardi-content">
                                <h5 className="font-weight-bold">Dr. Neha Patel</h5>
                                <h6 className="font-weight-bold my-3">Dentist at Perfect Smile Dental Clinic</h6>
                                <p className='tastimonials-stars'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                <p>"Dr. Patel's professionalism and dedication to pain-free dentistry ensure a comfortable and positive experience every time." - Shruti R.</p>
                            </div>
                        </div>
                        <div className="cardi">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp" alt="User 3" />
                            <div className="cardi-content">
                                <h5 className="font-weight-bold">Dr. Anjali Shastri</h5>
                                <h6 className="font-weight-bold my-3">Oncologist at Hope Cancer Center</h6>
                                <p className='tastimonials-stars'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
                                <p>"Dr. Shastri's expertise and compassion gave me strength during my cancer journey. She's a true healer in every sense." - Kiran S.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {city && actualData &&
                    <div className="doctors-overlay">
                        <div className="doctors-model">
                            <DocSuggestions city={city} formData={formData} />
                        </div>
                    </div>
                }
                <script>
                    {`
                        document.querySelectorAll('.slider-container').forEach(function (container) {
                            container.addEventListener('wheel', function (e) {
                                if (e.deltaY !== 0) {
                                    e.preventDefault();
                                    container.scrollLeft += e.deltaY;
                                }
                            });
                        });
                    `}
                </script>
            </section>
        </>
    )
}

export default LandingPage;