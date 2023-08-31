import heroimage from "/src/assets/images/heroimage.png";
import rectanglarLine from "/src/assets/images/Rectangle 12.png";


const HeroSection = () => {
  return (
    <>
      <section className="grid grid-cols-1 items-start justify-between gap-12 px-6 py-10 md:grid-cols-2 md:py-16 md:items-center xl:gap-20 xl:px-20 xl:items-start">
        <div className="flex flex-col gap-3">
          <p className="text-sm text-natural-black md:text-md xl:text-xl">FROM DIFFERENT PLATFORM WE</p>
          <h1 className="text-4xl text-natural-black md:text-5xl xl:text-7xl">
            JOIN <span className="text-natural-orange">LEARNERS</span> WITH <span className="text-natural-light-green">MENTORS</span>{" "}
          </h1>
          <img src={rectanglarLine} alt=""/>
          <p className="text-md md:text-xl md:mt-5">
            Connect with other learners, ask questions, share tips, get
            motivated and get matched with mentors.
          </p>
          <form action="" method="post" className="flex flex-col gap-3 mt-6 md:mt-10 xl:relative">
            <input type="text" name="" id="" placeholder="Paste the URL of the online course" className="px-4 py-3 rounded-full border-natural-black border-2 xl:p-5 xl:relative" />
            <button type="submit" className="px-4 py-3 rounded-full bg-natural-orange text-white xl:absolute xl:inset-y-0 right-0 xl:m-2 xl:px-8 ">JOIN</button>
          </form>
        </div>
        <img src={heroimage} alt="" className="rounded-full mx-auto xl:w-2/3"/>
      </section>
    </>
  );
};

export default HeroSection;
