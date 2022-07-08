const Section1 = () => {
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

        <div className="flex flex-col px-2 pt-5">
          <div>
            <label className="text-sm" for="">
              Input
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-500 mt-2 placeholder:text-xs"
              placeholder="input"
            />
          </div>
        </div>

        <div className="flex flex-col px-2 pt-5">
          <div>
            <label className="text-sm" for="">
              Textarea
            </label>
            <textarea
              className="w-full rounded-lg border-gray-500 mt-2 placeholder:text-xs"
              placeholder="Text Area"
            ></textarea>
          </div>
        </div>

        <div className="mx-2">
          <button className="bg-red-500 hover:bg-red-400 transition-all duration-200 text-white py-2 w-full rounded-lg my-5">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
