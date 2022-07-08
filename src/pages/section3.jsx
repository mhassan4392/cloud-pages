const Section3 = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col mx-auto">
      <div className="shadow-xl mx-2 rounded-lg my-2">
        <div className="flex items-center space-x-2 py-4 border-b px-2">
          <div className="w-20 h-20 bg-gray-200 shadow rounded-full"></div>
          <div>
            <h1>Name</h1>
            <p className="bg-blue-400 rounded-lg text-white px-4 py-1 text-xs">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b py-4 text-sm px-3 cursor-pointer hover:bg-blue-500 hover:bg-opacity-10 transition-all duration-200">
            <p>配送地址</p>
            <span>
              <i className="fa-solid fa-chevron-right text-xs text-gray-500"></i>
            </span>
          </div>
          <div className="flex items-center justify-between border-b py-4 text-sm px-3 cursor-pointer hover:bg-blue-500 hover:bg-opacity-10 transition-all duration-200">
            <p>交易记录</p>
            <span>
              <i className="fa-solid fa-chevron-right text-xs text-gray-500"></i>
            </span>
          </div>
          <div className="flex items-center justify-between border-b py-4 text-sm px-3 cursor-pointer hover:bg-blue-500 hover:bg-opacity-10 transition-all duration-200">
            <p>联系客服</p>
            <span>
              <i className="fa-solid fa-chevron-right text-xs text-gray-500"></i>
            </span>
          </div>
        </div>

        <div className="mx-2">
          <button className="bg-red-500 hover:bg-red-400 transition-all duration-200 text-white py-2 w-full rounded-lg my-5">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
