import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

const FilterBox = () => {
  let iconStyle = { color: "#757575" };
  if (window.innerWidth <= 640) {
    iconStyle["fontSize"] = "24px";
  } else {
    iconStyle["fontSize"] = "18px";
  }

  return (
    <div className="custom-width mt-[20px] h-[40px] ml-[20px] flex items-center text-[18px] lg:text-[14px] cursor-pointer text-gray_700">
      <h3 className="grow">Articles List</h3>
      <h3>Filter</h3>
      <FilterAltOutlinedIcon style={iconStyle} />
    </div>
  );
};

export default FilterBox;
