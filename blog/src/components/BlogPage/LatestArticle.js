import { ArticlesContextProvider } from "../../store/articles-context";
import { useArticles } from "../../store/articles-context";

const LatestArticle = () => {
  const { articlesData } = useArticles(ArticlesContextProvider);

  const latestArticlesIndex = articlesData.findIndex((item) => item.latest);

  return (
    <article className="w-[100%] lg:w-[60%] h-[300px] lg:h-[400px] lg:mr-[20px] relative">
      <div className="w-[100%] h-[100%] absolute bg-black opacity-60 z-10 rounded-md"></div>
      <img
        className="h-[100%] w-[100%] object-fill absolute rounded-md z-0"
        src={articlesData[latestArticlesIndex].thumbnail}
      />
      <div className="w-[80%] absolute mt-[20px] ml-[20px] z-20">
        <h3 className="text-[20px]  text-white">
          {articlesData[latestArticlesIndex].categories[0].toUpperCase()}
        </h3>
        <h2 className="text-[30px] mt-[10px] font-semibold text-white">
          {articlesData[latestArticlesIndex].title}
        </h2>
      </div>
    </article>
  );
};

export default LatestArticle;
