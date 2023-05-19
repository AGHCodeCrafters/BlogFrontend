const Article = (props) => {
  return (
    <li className="h-[400px] lg:h-[250px] w-[47%] lg:mb-[10px] flex flex-col grow-1">
      <img
        src={props.thumbnail}
        className="min-h-[200px] lg:h-[100px] object-cover rounded-md mb-[10px] lg:mb-[5px]"
      />
      <p className="text-[12px] text-gray_500 mb-[10px] lg:mb-[2.5px]">
        {props.categories}
      </p>
      <h4 className="text-[16px] lg:text-[12px] font-semibold  text-gray_300 mb-[10px] lg:mb-[5px]">
        {props.title}
      </h4>
    </li>
  );
};

export default Article;
