import { useArticles } from "../../../store/articles-context";
import ListItem from "./ListItem";

const ArticlesList = () => {
  const {
    articlesData,
    onClickItem,
    showInfoModal,
    onShowInfoModal,
    onDeleteItem,
    editMode,
    onEditMode,
  } = useArticles();

  const showInfoHandler = () => {
    onShowInfoModal(!showInfoModal);
  };

  const clickedItemHandler = (id) => {
    onClickItem(id);
  };

  const deleteItemHandler = (id) => {
    onDeleteItem(id);
  };

  const editItemHandler = () => {
    onEditMode(!editMode);
  };

  return (
    <ul className="custom-width lg:height-[300px] mt-[20px] ml-[20px] p-[10px] md:p-[20px] flex flex-col gap-[10px] md:gap-[20px] overflow-y-auto custom-box-shadow rounded-md">
      {articlesData.map((article) => (
        <ListItem
          title={article.title}
          key={article.id}
          id={article.id}
          showInfo={() => {
            showInfoHandler(article.id);
          }}
          clickedItem={() => clickedItemHandler(article.id)}
          deleteItem={() => deleteItemHandler(article.id)}
          editItem={() => editItemHandler()}
        />
      ))}
    </ul>
  );
};

export default ArticlesList;
