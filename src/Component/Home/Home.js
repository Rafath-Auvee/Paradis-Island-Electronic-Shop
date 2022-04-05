import React from 'react';
import CustomReview from '../CustomReview/CustomReview';
import './Home.css';

const Home = () => {
    return (
      <div className="mt-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
          <div className="p-5 lg:mt-10">
            <h1 className="text-3xl font-bold px-10">Welcome to,</h1>
            <h1 className="text-6xl pt-5 px-10 font-bold text-green-600">
            Paradis Island Electronic Shop
            </h1>
            <p className="flex justify-center text-justify px-10 pt-5">
            The First & Largest Online Shop in Paradis Island for Robotic and Electronic Components. Buy products with warranty & get free tech support and Print pcb.
            </p>
            <button className="mt-5 mx-10 bg-green-200 rounded p-3 font-bold">
              Shop Now
            </button>
          </div>
          <div>
            <img
              className="mx-10 img-size"
              src="https://images.unsplash.com/photo-1517055729445-fa7d27394b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <CustomReview />
        </div>
      </div>
    );
};

export default Home;