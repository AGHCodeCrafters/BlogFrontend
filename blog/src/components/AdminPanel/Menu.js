import { Link } from "react-router-dom";
import { useArticles } from "../../store/articles-context";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Menu = () => {
  const { onEditMode } = useArticles();
  const iconsStyle = { fontSize: "24px", color: "#fff" };
  const textStyles = "flex flex-col items-center gap-1";
  return (
    <nav className="h-[80px] lg:h-[60px] w-[100%] p-[10px] text-[18px] lg:text-[12px] text-white flex items-center justify-around fixed bottom-0 rounded-t-[24px] md:rounded-t-none bg-blue ">
      <Link
        to="dashboard"
        className={textStyles}
        onClick={() => onEditMode(false)}
      >
        <DescriptionOutlinedIcon style={iconsStyle} />
        <p>Dashboard</p>
      </Link>
      <Link to="upload" className={textStyles}>
        <DriveFileRenameOutlineOutlinedIcon style={iconsStyle} />
        <p>Upload</p>
      </Link>
      <Link to="settings" className={textStyles}>
        <SettingsOutlinedIcon style={iconsStyle} />
        <p>Settings</p>
      </Link>
    </nav>
  );
};

export default Menu;
