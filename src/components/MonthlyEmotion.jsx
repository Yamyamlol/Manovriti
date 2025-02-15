
const MonthlyEmotion = () => {
  return (
    <div className="p-4 flex justify-center">
      <div className="h-[370px] w-[800px] shadow-lg bg-white rounded-2xl">
        <div className="flex flex-col items-center">
          <div className="font-bold p-6 text-3xl text-center">
            Emotion of the Month
          </div>
          <div className="flex px-8 py-4 items-center">
            <div className="h-50 w-50 rounded-[50%] bg-black"></div>
            <div className="px-8 flex flex-col">
              <div className="text-2xl font-bold">Happy</div>
              <div className="py-4 text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae, minus?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyEmotion;
