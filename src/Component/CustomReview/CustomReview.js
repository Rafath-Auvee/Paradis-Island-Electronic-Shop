import React from 'react';
import useReviews from '../../CustomHook/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';
import { Outlet, Link } from "react-router-dom";

const CustomReview = () => {
  const [reviews, setReview] = useReviews();
    return (
      <div>
        <h1 className="text-4xl mt-4 text-green-600 font-bold mb-10 flex justify-center">
          Customer Reviews(3)
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center ">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCart review={review} key={review.id}></ReviewCart>
          ))}
        </div>

        <Link to="reviews" className="flex justify-center">
          <button className="mt-10 bg-green-600 text-white rounded py-5 font-bold text-black-50 text-2xl px-20">
            See All Reviews
          </button>
        </Link>
      </div>
    );
};

export default CustomReview;