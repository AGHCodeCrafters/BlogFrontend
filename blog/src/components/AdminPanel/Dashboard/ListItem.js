import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const ListItem = (props) => {
  let iconStyle = { color: "#444444", fontSize: "24px" };

  return (
    <li
      onClick={props.clickedItem}
      className="flex gap-[10px] p-[10px] md:p-[20px] items-center cursor-pointer custom-box-shadow rounded-md"
    >
      <p className="grow text-gray_500 font-medium text-[18px] lg:text-[12px]">
        {props.title}
      </p>

      <InfoOutlinedIcon style={iconStyle} onClick={props.showInfo} />
      <Link to={`/admin-panel/upload/edit/${props.id}`}>
        <ModeEditOutlineOutlinedIcon
          style={iconStyle}
          onClick={props.editItem}
        />
      </Link>
      <DeleteOutlineOutlinedIcon style={iconStyle} onClick={props.deleteItem} />
    </li>
  );
};

export default ListItem;
