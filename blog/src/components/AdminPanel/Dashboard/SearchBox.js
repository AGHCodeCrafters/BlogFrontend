import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <div className="custom-width mt-[20px] ml-[20px] p-[10px] md:p-[5px] flex items-center rounded-md custom-box-shadow">
      <input
        className="h-[40px] lg:h-[20px] pl-[10px] basis-4/5 grow text-[18px] lg:text-[12px] text-gray_500 font-normal focus:outline-none"
        placeholder="Search..."
      ></input>
      <SearchIcon
        style={{ fontSize: "24px", color: "#4C32FF", margin: "0 10px" }}
      />
    </div>
  );
};

export default SearchBox;
