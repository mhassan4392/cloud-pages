const Section2 = () => {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col mx-auto justify-center">
      <div className="mx-2">
        <button className="bg-red-500 hover:bg-red-400 transition-all duration-200 text-white py-2 w-full rounded-lg my-5">
          Sea Transport
        </button>
      </div>
      <div className="mx-2">
        <button className="bg-red-500 hover:bg-red-400 transition-all duration-200 text-white py-2 w-full rounded-lg my-5">
          Air Transport
        </button>
      </div>
    </div>
  );
};

export default Section2;
