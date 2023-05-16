import React, { useState, useContext } from "react";

export const ArticlesContext = React.createContext();

export const useArticles = () => {
  return useContext(ArticlesContext);
};

export const ArticlesContextProvider = (props) => {
  const DUMMY_DATA = [
    {
      title: "Demystifying Cryptocurrencies: Understanding the Basics",
      subtitle: "A Comprehensive Guide for Beginners",
      author: "Sarah Johnson",
      categories: ["crypto", "finance"],
      thumbnail: "https://rankia.pl/app/uploads/2023/01/czym-jest-bitcoin.jpg",
      latest: false,
      date: "01.01.2023",
      id: "1",
    },
    {
      title: "The Rise of NFTs: Unlocking New Opportunities for Digital Art",
      subtitle: "Exploring the World of Non-Fungible Tokens",
      author: "Mark Davis",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEn7Rl4DW-zwNLJmiopy7XvN_zRjhOzfwdw&usqp=CAU",
      categories: ["nft", "crypto"],
      content:
        "Non-fungible tokens, or NFTs, have taken the art world by storm, allowing digital artists to monetize their work in a way that was previously impossible. In this article, we'll explore what NFTs are, how they work, and the impact they're having on the art world. We'll also take a look at some of the most notable NFT sales to date.",
      latest: false,
      date: "02.02.2023",
      id: "2",
    },
    {
      title:
        "The Future of Payments: Exploring the Potential of Cryptocurrencies",
      subtitle: "How Cryptocurrencies are Changing the Landscape of Finance",
      author: "Jennifer Lee",
      thumbnail:
        "https://img.etimg.com/thumb/msid-84018006,width-640,resizemode-4,imgsize-128601/most-traded-coins.jpg",
      categories: ["crypto", "finance"],
      content:
        "Cryptocurrencies have come a long way since the launch of Bitcoin in 2009. With more than 4,000 different cryptocurrencies in circulation today, it's clear that the crypto industry is here to stay. But what does the future hold for cryptocurrencies and blockchain technology? In this article, we've asked experts to weigh in on what they believe will happen in the next decade.",
      latest: true,
      date: "07.05.2023",
      id: "3",
    },
    {
      title: "Understanding the Role of Stablecoins in the Crypto Market",
      subtitle:
        "A deep dive into what stablecoins are and how they're used in the world of cryptocurrencies.",
      author: "Michael Wong",
      thumbnail:
        "https://zipmex.com/static/64b740628c6dea3f6fe96723aa4b3563/09ff8/stablecoin.png",
      categories: ["crypto", "blockchain"],
      content:
        "Stablecoins are a unique type of cryptocurrency that is designed to maintain a stable value against a particular asset, such as the US dollar or gold. In this article, we'll explore what stablecoins are, how they're used, and their role in the crypto market.",
      latest: false,
      date: "08.05.2023",
      id: "4",
    },
    {
      title: "The Future of Cryptocurrencies: Predictions for the Next Decade",
      subtitle:
        "Experts weigh in on what the future holds for cryptocurrencies and blockchain technology.",
      author: "Sarah Johnson",
      thumbnail:
        "https://public.bnbstatic.com/image/cms/blog/20220624/086d446b-5e41-4569-978d-b8d24e7e8482.png",
      categories: ["crypto", "finance"],
      content:
        "Cryptocurrencies have come a long way since the launch of Bitcoin in 2009. With more than 4,000 different cryptocurrencies in circulation today, it's clear that the crypto industry is here to stay. But what does the future hold for cryptocurrencies and blockchain technology? In this article, we've asked experts to weigh in on what they believe will happen in the next decade.",
      latest: false,
      date: "02.02.2023",
      id: "5",
    },
    {
      title: "Crypto Scams: How to Spot Them and Avoid Being a Victim",
      subtitle:
        "Tips for identifying and avoiding cryptocurrency scams in an unregulated market",
      author: "Emma Brown",
      thumbnail:
        "https://api.time.com/wp-content/uploads/2022/03/cryptocurrency-scams.jpg",
      categories: ["crypto", "problems"],
      content:
        "As the crypto market continues to grow, so do the number of scams targeting unsuspecting investors. In this article, we'll discuss some common crypto scams and how to identify them. We'll also offer tips for avoiding these scams and protecting your investments.",
      latest: false,
      date: "02.02.2023",
      id: "6",
    },
  ];

  const [showInfoModal, setShowModal] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [articlesData, setArticlesData] = useState(DUMMY_DATA);
  const [editMode, setEditMode] = useState(false);

  const showInfoModalHandler = (value) => {
    setShowModal(value);
  };

  const clickedItemHandler = (id) => {
    setClickedItem(id);
  };

  const deleteItemHandler = (id) => {
    setArticlesData(articlesData.filter((item) => item.id !== id));
  };

  const uploadArticleHandler = (data) => {
    setArticlesData((prev) => [...prev, data]);
  };

  const EditArticleHandler = (data) => {
    setArticlesData((prev) => {
      const updateItem = articlesData.findIndex(
        (item) => item.id === clickedItem
      );
      articlesData[updateItem].title = data.title;
      articlesData[updateItem].subtitle = data.subtitle;
      articlesData[updateItem].author = data.author;
      articlesData[updateItem].thumbnail = data.thumbnail;
      articlesData[updateItem].content = data.content;
      articlesData[updateItem].date = data.date;
      articlesData[updateItem].id = data.id;
      return [...prev];
    });
  };

  const editModeHandler = (value) => {
    setEditMode(value);
  };

  const value = {
    showInfoModal,
    clickedItem,
    articlesData,
    editMode,
    onShowInfoModal: showInfoModalHandler,
    onClickItem: clickedItemHandler,
    onDeleteItem: deleteItemHandler,
    onUploadArticle: uploadArticleHandler,
    onEditArticle: EditArticleHandler,
    onEditMode: editModeHandler,
  };

  return (
    <ArticlesContext.Provider value={value}>
      {props.children}
    </ArticlesContext.Provider>
  );
};
