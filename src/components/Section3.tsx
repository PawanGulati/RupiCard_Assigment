const Section3 = () => {
  return (
    <section className="bg-black text-white py-28 px-4">
      <div className="text-3xl flex flex-col md:flex-row gap-4 justify-between items-center max-w-6xl mx-auto mb-24">
        <p className="max-md">
          We've all heard of instant groceries, now say hello to instant credit.
          <span className="text-gray-400">
            0% hassle, 100% paperless. Get your Uni Card instantly.
          </span>
        </p>
        <img
          className="w-[30rem]"
          src="https://www.uni.cards/images/nx-wave/app_screen_1.webp"
        />
      </div>

      <div className="text-3xl flex  flex-col md:flex-row gap-4 justify-between items-center max-w-6xl mx-auto mb-24">
        <p className="max-md">
          With Uni, you're always in control.
          <span className="text-gray-400">
            Set your own payment limits. Choose how and where you spend. Lock
            and unlock your card. All right from the app.
          </span>
        </p>
        <img
          className="w-[30rem]"
          src="https://www.uni.cards/images/nx-wave/app_screen_1.webp"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto mb-12">
        <p className="flex-1 text-2xl">
          <img
            className="w-[7rem] mb-10 mx-auto md:mx-0"
            src="https://www.uni.cards/images/nx-wave/whatsapp_bubble.webp"
          />
          Help, just a WhatsApp away. Anytime, Anyday.
          <span className="text-xl text-gray-400">
            During hectic work hours. On lazy sunday mornings. In the thick of
            night. Anytime. flex-col md:flex-row gap-4
          </span>
        </p>
        <p className="flex-1 text-2xl">
          <img
            className="w-[7rem] mb-10 mx-auto md:mx-0"
            src="https://www.uni.cards/images/nx-wave/rupee_bubble.webp"
          />
          No hidden charges, no last minute surprises.
          <span className="text-xl text-gray-400">
            100% money back guarantee if a charge is applied without your
            knowledge.
          </span>
        </p>
        <p className="flex-1 text-2xl">
          <img
            className="w-[7rem] mb-10 mx-auto md:mx-0"
            src="https://www.uni.cards/images/nx-wave/antivirus_bubble.webp"
          />
          Super secure. Because we care about your money.
        </p>
      </div>
    </section>
  );
};

export default Section3;
