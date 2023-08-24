const Section2 = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl w-full text-2xl md:text-5xl mx-auto text-center px-8">
        <p className="text-black">
          Earn 1% assured cashback{" "}
          <span className="text-[#9EA7AE]">on your spends. Get</span> 5X
        </p>
        <p className="text-black">
          more value than cashback{" "}
          <span className="text-[#9EA7AE]"> at the Uni Store. Enjoy</span>
        </p>
        <p className="text-black">
          <span className="text-[#9EA7AE] css-1ggwlzr">round the clock </span>
          Whatsapp support.{" "}
          <span className="text-[#9EA7AE] css-1ggwlzr">And it's</span>
        </p>
        <p className="text-black">
          lifetime free
          <span className="text-[#9EA7AE]">
            ; no joining fee, no annual charges.
          </span>
        </p>
      </div>
      <div className="flex md:justify-center py-12 opacity: 1 transform: none">
        <div
          className="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center"
          style={{
            background:
              "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
          }}
        >
          <img
            alt="down_arrow"
            src="https://www.uni.cards/images/down_arrow.svg"
            loading="lazy"
            className="w-9 md:w-14 css-0"
          />
        </div>
      </div>
      <div className="max-w-6xl md:flex gap-16 flex-row-reverse justify-between items-center w-full mx-auto mt-10 text-2xl md:text-4xl">
        <img
          className="w-80 md:w-[25rem] mx-auto my-12"
          src="https://www.uni.cards/images/one_percent_cashback.png"
        />
        <div className="px-8">
          <span className="font-bold">1% assured cashback on your spends.</span>
          <span className="text-gray-400">
            The more you spend, the more you earn.
          </span>
        </div>
      </div>
      <div className="max-w-6xl md:flex gap-16 justify-between items-center w-full mx-auto mt-10 text-2xl md:text-4xl">
        <img
          className="w-[25rem] mx-auto my-12"
          src="https://www.uni.cards/images/five_x_rewards.png"
        />
        <div className="px-8">
          <span className="font-bold">5x more value than your cashback,</span>
          <span className="text-gray-400">
            The more you spend, the more you earn. only at the Uni Store.
          </span>
        </div>
      </div>
      <div className="max-w-6xl md:flex gap-16 flex-row-reverse justify-between items-center w-full mx-auto mt-10 text-2xl md:text-4xl">
        <img
          className="w-[25rem] mx-auto my-12"
          src="https://www.uni.cards/images/forex_globe.png"
        />
        <div className="px-8">
          <span className="font-bold">Zero Forex Markup.</span>
          <span className="text-gray-400">
            The more you spend, the more you earn. only at the Uni Store. The
            more you spend, the more you earn. only at the Uni Store.
          </span>
        </div>
      </div>
      <p className="text-4xl px-8 mt-10 max-w-6xl w-full mx-auto md:text-center md:text-5xl">
        Lifetime <span className="text-green-400">free. </span>
        <span>No joining fee.</span>
        <span className="md:block md:text-center"> No annual charges. </span>
      </p>
    </section>
  );
};

export default Section2;
