 const Inbox = () => {
  return (
    <section
      className="relative flex flex-col border-lime-500 border-[2px] bg-opacity-0 text-white md:border-[5px] shadow-blue shadow-2xl items-center justify-center gap-4 w-full md:w-[70%] h-auto md:h-[300px] 
                 m-auto mt-10 mb-10 bg-[#b8e5ef] px-6 py-8 text-center
                 rounded-[30px] md:rounded-[2.4rem] overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-[30px] md:rounded-[2.4rem]"
        style={{ backgroundImage: 'url("./hero.avif")' }}
      >
        {/* Black Shadow Overlay (Only on Image) */}
        <div className="absolute inset-0 bg-black opacity-70 rounded-[30px] md:rounded-[2.4rem]"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center gap-4 w-full">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold font-Cambaria leading-tight">
          Improvement in your inbox
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-left lg:text-center w-full md:w-[85%]">
          Get ready to enjoy the best of food at your fingertips! With exclusive offers, 
          tempting menu updates, and special promotions delivered directly to your inbox.
        </p>

        {/* Email Input & Button */}
        <div className="flex flex-col md:flex-row w-full max-w-lg mt-3">
          <input
            type="text"
            className="w-full md:w-3/4 p-3 text-black md:rounded-l-lg focus:outline-none"
            placeholder="Enter your Email"
          />
          <button className="w-full md:w-[150px] p-3 bg-lime-500 rounded-r-lg md:rounded-r-lg">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};



export default Inbox