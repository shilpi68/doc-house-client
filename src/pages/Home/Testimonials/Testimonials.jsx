import SectionTitle from "../../../comoponent/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { BsQuote } from "react-icons/bs";


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SectionTitle
                heading={"Doc’s Beach House makes its return to Bonita Springs"}
                subHeading={"what Our Patients Says"}
            ></SectionTitle>

            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}>
                            <div className="m-20">
                                <p className="text-orange-500 font-bold text-2xl text-center m-4">{review.name}</p>
                                <BsQuote className="text-center mx-auto text-4xl m-2"></BsQuote>
                                <Rating
                                className="text-center mx-auto"
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="m-5">{review.details}</p>
                                
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </section>
    );
};

export default Testimonials;