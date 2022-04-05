import React from 'react';
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewCart = (props) => {
    const{name,img,title,rating}=props.review;
    return (
      <div className="shadow-lg border-2 mt-4 border-black-500 rounded-2xl w-[350px]  bg-white p-4">
        <div >
          <img className="rounded-2xl" src={img} alt="" srcset="" />
        </div>
        <h2 className="text-xl font-bold flex justify-center m-5">
          Name : {name}
        </h2>
        <p className="flex justify-center mt-5 mb-5">{title}</p>
        <Rating
          initialRating={rating}
          emptySymbol={<FontAwesomeIcon icon={faStar} />}
          fullSymbol={
            <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
          }
          readonly
        ></Rating>
        
      </div>
    );
};

export default ReviewCart;