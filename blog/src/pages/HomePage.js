import LatestArticles from "../components/BlogPage/LatestArticles";

const HomePage = () => {
  return (
    <main className="h-auto">
      <div className="custom-width lg:w-[80%] h-auto lg:m-auto mt-[20px] ml-[20px] lg:mt-[20px] flex justify-between items-center">
        <h2 className="text-[18px] lg:text-[16px] text-gray_500 font-semibold">
          Latest article
        </h2>
        <h2 className="text-[18px] lg:text-[16px] text-gray_500 font-semibold cursor-pointer">
          View Latest
        </h2>
      </div>

      <LatestArticles />
    </main>
  );
};

export default HomePage;
