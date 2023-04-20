import { useState } from "react";

const CategoryBox = (props) => {
  const [categoriesList, setCategoriesList] = useState([
    { category: "Crypto", marked: false },
    { category: "Finance", marked: false },
    { category: "Blockchain", marked: false },
    { category: "News", marked: false },
    { category: "Problems", marked: false },
    { category: "Goverment", marked: false },
  ]);

  const categoryClickHandler = (obj) => {
    const copiedList = [...categoriesList];
    const clickedItem = copiedList.find(
      (item) => item.category == obj.category
    );
    clickedItem.marked = !clickedItem.marked;
    setCategoriesList(copiedList);
    props.categories(categoriesList);
  };

  return (
    <ul className="min-h-[50px] md:min-h-[70px] p-[10px] mt-[20px] flex items-center justify-between gap-5 overflow-x-auto overflow-y-hidden scroll bg-blue rounded-md cursor-pointer">
      {categoriesList.map((obj) => (
        <li
          key={Math.floor(Math.random() * 1000)}
          className={`p-[5px] text-white text-16px md:text-[18px] font-medium border-2 rounded-md ${
            obj.marked ? "border-white" : "border-blue"
          }`}
          onClick={() => categoryClickHandler(obj)}
        >{`#${obj.category}`}</li>
      ))}
    </ul>
  );
};

export default CategoryBox;
