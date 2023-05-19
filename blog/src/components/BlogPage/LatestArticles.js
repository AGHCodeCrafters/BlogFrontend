import { ArticlesContextProvider } from "../../store/articles-context";
import { useArticles } from "../../store/articles-context";
import LatestArticle from "./LatestArticle";
import ArticlesList from "./ArticlesList";

const LatestArticles = () => {
  const { articlesData } = useArticles(ArticlesContextProvider);

  const latestArticlesIndex = articlesData.findIndex((item) => item.latest);

  return (
    <section className="custom-width lg:w-[80%] h-auto lg:m-auto mt-[20px] ml-[20px] flex flex-col lg:flex-row">
      <LatestArticle />
      <ArticlesList />
    </section>
  );
};

export default LatestArticles;
