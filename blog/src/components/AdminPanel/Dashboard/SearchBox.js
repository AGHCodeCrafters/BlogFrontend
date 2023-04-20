import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <div className="custom-width mt-[20px] ml-[20px] md:p-[10px] flex items-center rounded-md custom-box-shadow">
      <input
        className="h-[5vh] pl-[10px] basis-4/5 grow text-[18px] text-gray_500 font-normal focus:outline-none"
        placeholder="Search..."
      ></input>
      <SearchIcon
        style={{ fontSize: "24px", color: "#4C32FF", margin: "0 10px" }}
      />
    </div>
  );
};

export default SearchBox;
