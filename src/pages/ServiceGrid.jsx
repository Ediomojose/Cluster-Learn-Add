import React from "react";
import ImageOne from "/src/assets/images/image1.png";
import ImageTwo from "/src/assets/images/image5.png";
import ImageThree from "/src/assets/images/image2.png";
import ImageFour from "/src/assets/images/image3.png";
import ImageFive from "/src/assets/images/image4.png";

const ServiceGrid = () => {
  return (
    <>
      <article className="grid grid-cols-1 gap-16 p-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="bg-natural-orange p-6 rounded-full w-4 h-4 text-2xl flex items-center justify-center">01</div>
            <div>
              <h2>Connect with other learners</h2>
              <p>
                Meet other learners who are taking the same course as you and
                get help and support from each other.
              </p>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Join Learners
              </a>
            </div>
          </div>
          <img src={ImageOne} alt="Image of people holding themselves" />
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <img src={ImageTwo} alt="Image of people holding themselves" />
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="bg-natural-orange p-6 rounded-full w-4 h-4 text-2xl flex items-center justify-center">01</div>
            <div>
              <h2>Connect with other learners</h2>
              <p>
                Meet other learners who are taking the same course as you and
                get help and support from each other.
              </p>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Join Learners
              </a>
            </div>
          </div>
          
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="bg-natural-orange p-6 rounded-full w-4 h-4 text-2xl flex items-center justify-center">01</div>
            <div>
              <h2>Connect with other learners</h2>
              <p>
                Meet other learners who are taking the same course as you and
                get help and support from each other.
              </p>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Join Learners
              </a>
            </div>
          </div>
          <img src={ImageThree} alt="Image of people holding themselves" />
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <img src={ImageFour} alt="Image of people holding themselves" />
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="bg-natural-orange p-6 rounded-full w-4 h-4 text-2xl flex items-center justify-center">01</div>
            <div>
              <h2>Connect with other learners</h2>
              <p>
                Meet other learners who are taking the same course as you and
                get help and support from each other.
              </p>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Join Learners
              </a>
            </div>
          </div>
          
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="bg-natural-orange p-6 rounded-full w-4 h-4 text-2xl flex items-center justify-center">01</div>
            <div>
              <h2>Connect with other learners</h2>
              <p>
                Meet other learners who are taking the same course as you and
                get help and support from each other.
              </p>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Join Learners
              </a>
            </div>
          </div>
          <img src={ImageFive} alt="Image of people holding themselves" />
        </div>
      </article>
    </>
  );
};

export default ServiceGrid;
