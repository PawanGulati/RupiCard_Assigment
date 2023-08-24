import ApplyForm from "./ApplyInput";
import NavBar from "./NavBar";

const StarSVG = () => {
  return (
    <svg
      className="mx-[8px] mb-[2px] inline leading-5"
      width="12"
      height="12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
        fill="#000"
        className="mix-blend-mode:darken"
      ></path>
    </svg>
  );
};

const Section1 = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center">
      <NavBar />
      <div className="max-w-7xl w-full bg-transparent z-10 h-full p-6 md:flex md:flex-row-reverse md:justify-between">
        <img
          className="w-60 mb-6 md:mb-0 md:w-96 md:ml-10"
          src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
        />
        <div className="md:w-[50%]">
          <span className="text-3xl md:text-5xl mt-6 tracking-wide">
            <strong>NX Wave.</strong>
            <span className="md:text-6xl text-justify">
              The next-gen credit card for those who love rewards.
            </span>
          </span>
          <div className="space-x-2 text-sm mt-2 md:text-base">
            <span>1% cashback</span>
            <span>
              <StarSVG />
            </span>
            <span>5x rewards</span>
            <StarSVG />
            <span>Zero forex markup</span>
          </div>
          <div className="hidden md:block">
            <ApplyForm className="mt-4" />
          </div>
        </div>
      </div>
      <video
        className="absolute top-0 -z-10 min-h-screen object-cover"
        autoPlay
        muted
        loop
      >
        <source
          src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
};

export default Section1;
