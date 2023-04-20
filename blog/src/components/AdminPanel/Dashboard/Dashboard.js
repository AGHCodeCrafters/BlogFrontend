import { useArticles } from "../../../store/articles-context";
import { createPortal } from "react-dom";
import SearchBox from "./SearchBox";
import FilterBox from "./FilterBox";
import ArticlesList from "./ArticlesList";
import ModalInfo from "./ModalInfo";
import Overlay from "../../UI/Overlay";

const Dashboard = () => {
  const { showInfoModal } = useArticles();
  return (
    <section className="h-[80vh] md:w-[70vw] md:absolute md:left-[50%] md:translate-x-[-50%] flex flex-col">
      <h2 className="ml-[20px] mt-[20px] text-[24px] md:text-[30px] text-gray_500">
        Articles dashboard
      </h2>
      <SearchBox />
      <FilterBox />
      <ArticlesList />
      {showInfoModal && createPortal(<ModalInfo />, document.body)}
      {showInfoModal && createPortal(<Overlay />, document.body)}
    </section>
  );
};

export default Dashboard;
