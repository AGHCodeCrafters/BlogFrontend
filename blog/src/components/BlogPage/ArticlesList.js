import React from "react";
import { ArticlesContextProvider } from "../../store/articles-context";
import { useArticles } from "../../store/articles-context";
import Article from "./Article";

const ArticlesList = () => {
  const { articlesData } = useArticles(ArticlesContextProvider);

  return (
    <ul className="lg:w-[40%] h-[auto] mt-[20px] lg:mt-[0px] flex flex-wrap justify-between gap-5 lg:gap-2">
      {articlesData
        .filter((article) => article.latest !== true)
        .map((article, index) => (
          <Article
            key={index}
            thumbnail={article.thumbnail}
            categories={article.categories[0].toUpperCase()}
            title={article.title}
          />
        ))}
    </ul>
  );
};

export default ArticlesList;
