import listStory from "./story";

const Story = () => {
  return (
    <div className="">
      <h1 className="text-3xl font-extrabold text-gray-900 text-center mt-5 mb-5">Histoires</h1>

      {listStory.map((story, index) => (
        <div
          className="w-full p-4 shadow-md lg:max-w-4xl m-auto mb-5"
          key={index}
        >
          <div className="space-y-2 scroll-mb-1.5">
            <h3 className="text-2xl font-semibold">{story.title}</h3>
            <p className="text-gray-600 text-justify">{story.story}</p>
                <p className="text-gray-700 text-right">{story.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Story;
