import { useGlobalContext } from "./context";
import sublinks from "./data";
import { useRef } from "react";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const submenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event; //get the X and Y coordinates of the cursor when certain event was triggered
    if (clientX < left || clientX > right || clientY > bottom) {
      setPageId(null);
    }
    //console.log(clientX, clientY);
    //console.log(result);
  };

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
    >
      {/* if current page is undefined don't show it*/}
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
        ref={submenuContainer}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
