import heroimage from "/src/assets/images/heroimage.png";

const HeroSection = () => {
  return (
    <>
      <section className="grid grid-cols-1 items-start justify-between md:grid-cols-2">
        <div className="flex flex-col">
          <p className="text-lg md:text-xl">FROM DIFFERENT PLATFORM WE</p>
          <h1 className="text-5xl">
            JOIN <span>LEARNERS</span> WITH <span>MENTORS</span>{" "}
          </h1>
          <p>
            Connect with other learners, ask questions, share tips, get
            motivated and get matched with mentors.
          </p>
          <form action="" method="post">
            <input type="text" name="" id="" />
            <button type="submit">JOIN</button>
          </form>
        </div>
        <img src={heroimage} alt="" />
      </section>
    </>
  );
};

export default HeroSection;
