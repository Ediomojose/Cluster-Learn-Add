import React from "react";
import JoinButton from "../components/JoinButton/JoinButton";
import UserOne from "/src/assets/images/emma.png";
import UserTwo from "/src/assets/images/good.png";

const TestimonialCarousel = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <div className="flex flex-col gap-10 p-10">
            <p className="text-center">
              “I have connected with up to 10 groups through my development
              process. And my groups has been so helpful throughout”
            </p>
            <div className="flex items-center gap-4">
              <img
                src={UserOne}
                alt="Image of a man"
                className="w-10 rounded-full"
              />
              <div>
                <p>Ayomide Frezi</p>
                <p>Student at UNILAG</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 p-10">
            <p className="text-center">
              “I have connected with up to 10 groups through my development
              process. And my groups has been so helpful throughout”
            </p>
            <div className="flex items-center gap-4">
              <img
                src={UserTwo}
                alt="Image of a man"
                className="w-10 rounded-full"
              />
              <div>
                <p>Ayomide Frezi</p>
                <p>Student at UNILAG</p>
              </div>
            </div>
          </div>
        </div>
          <JoinButton />
      </section>
    </>
  );
};

export default TestimonialCarousel;
