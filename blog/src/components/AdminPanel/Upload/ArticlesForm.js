import { useEffect, useState } from "react";
import useInput from "../../../hooks/use-input";
import { useArticles } from "../../../store/articles-context";
import { useNavigate, useParams } from "react-router-dom";
import CategoryBox from "./CategoryBox";

const ArticlesForm = () => {
  const { onUploadArticle, articlesData, editMode, onEditMode, onEditArticle } =
    useArticles();

  const [categories, setCategories] = useState([]);

  const { articleId } = useParams();

  let index = null;

  if (editMode) {
    index = articlesData.findIndex((item) => item.id === articleId);
  }

  const defaultValues = {
    defaultTitle: index !== null ? articlesData[index].title : "",
    defaultSubtitle: index !== null ? articlesData[index].subtitle : "",
    defaultThumbnail: index !== null ? articlesData[index].thumbnail : "",
    defaultAuthor: index !== null ? articlesData[index].author : "",
    defaultArticle: index !== null ? articlesData[index].article : "",
  };

  const {
    enteredValue: enteredTitle,
    valueChangeHandler: titleChangeHandler,
    reset: resetTitleInput,
    valueIsValid: titleIsValid,
  } = useInput(() => true, defaultValues.defaultTitle);
  const {
    enteredValue: enteredSubtitle,
    valueChangeHandler: subtitleChangeHandler,
    reset: resetSubtitleInput,
    valueIsValid: subtitleIsValid,
  } = useInput(() => true, defaultValues.defaultSubtitle);
  const {
    enteredValue: enteredAuthor,
    valueChangeHandler: authorChangeHandler,
    reset: resetAuthorInput,
    valueIsValid: authorIsvalid,
  } = useInput(() => true, defaultValues.defaultAuthor);

  const {
    enteredValue: enteredThumbnail,
    valueChangeHandler: thumbnailChangeHandler,
    reset: resetThumbnailInput,
    valueIsValid: thumbnailIsvalid,
  } = useInput(() => true, defaultValues.defaultThumbnail);

  const {
    enteredValue: enteredArticle,
    valueChangeHandler: articleChangeHandler,
    reset: resetArticle,
    valueIsValid: articleIsvalid,
  } = useInput(() => true, defaultValues.defaultArticle);

  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let year = String(today.getFullYear());
  const todaysDate = day + "." + month + "." + year;

  useEffect(() => {}, [categories]);

  const categoriesHandler = (categoriesData) => {
    let categoriesArr = [];
    categoriesArr = categoriesData
      .filter((obj) => obj.marked === true)
      .map((obj) => obj.category);
    setCategories(categoriesArr);
  };

  let formIsValid =
    titleIsValid && subtitleIsValid && authorIsvalid && articleIsvalid;

  const navigate = useNavigate();

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    console.log(categories);

    const articleData = {
      title: enteredTitle,
      subtitle: enteredSubtitle,
      author: enteredAuthor,
      thumbnail: enteredThumbnail,
      categories: categories,
      article: enteredArticle,
      date: todaysDate,
      id: Math.floor(Math.random() * 1000),
    };

    console.log(articleData);

    if (!editMode) {
      onUploadArticle(articleData);
    } else {
      onEditArticle(articleData);
      onEditMode(false);
    }

    navigate("/admin-panel/dashboard");
    resetTitleInput("");
    resetSubtitleInput("");
    resetAuthorInput("");
    resetArticle("");
  };

  const labelStyle =
    "text-[18px] md:text-[24px] lg:text-[14px] mt-[20px] text-gray_700";

  const inputStyle =
    "w-[100%] p-[10px] md:p-[20px] lg:p-[10px] mt-[20px] text-[16px] md:text-[18px] lg:text-[12px] font-medium text-gray_500 focus:outline-none placeholder-gray_700 custom-box-shadow rounded-md";

  return (
    <form
      onSubmit={submitFormHandler}
      className="w-[100%] md:w-[90vw] lg:w-[40vw] absolute left-[50%] translate-x-[-50%] h-[80vh] px-[20px] flex flex-col overflow-y-auto overflow-x-hidden"
    >
      <h2 className="mt-[20px] text-[24px] md:text-[30px] lg:text-[18px] text-gray_500">{`${
        editMode ? "Edit" : "Upload"
      } Article`}</h2>
      <label className={labelStyle}>Title</label>
      <input
        type="text"
        id="title"
        onChange={titleChangeHandler}
        value={enteredTitle}
        placeholder="Title..."
        className={inputStyle}
      ></input>
      <label className={labelStyle}>Subtitle</label>
      <input
        type="text"
        id="subTitle"
        onChange={subtitleChangeHandler}
        value={enteredSubtitle}
        placeholder="Subtitle..."
        className={inputStyle}
      ></input>
      <label className={labelStyle}>Author</label>

      <input
        type="text"
        id="author"
        onChange={authorChangeHandler}
        value={enteredAuthor}
        placeholder="Author..."
        className={inputStyle}
      ></input>

      <label className={labelStyle}>Thumbnail</label>

      <input
        type="text"
        id="thumbnail"
        onChange={thumbnailChangeHandler}
        value={enteredThumbnail}
        placeholder="Image link..."
        className={inputStyle}
      ></input>

      <label className={labelStyle}>Category</label>
      <CategoryBox categories={categoriesHandler} />
      <label className={labelStyle}>Article</label>
      <textarea
        id="article"
        name="article"
        onChange={articleChangeHandler}
        value={enteredArticle}
        className="min-h-[300px] mt-[20px] p-[10px] text-[16px] md:text-[18px] lg:text-[12px] font-medium text-gray_500 focus:outline-none border-2 border-blue rounded-lg"
        placeholder="Type..."
      ></textarea>
      <button className="min-h-[44px] lg:h-[35px] mt-[20px] mb-[20px] text-[18px] lg:text-[14px] font-medium text-white bg-blue rounded-md">
        Upload an article
      </button>
    </form>
  );
};

export default ArticlesForm;
