import c from "./Sidebar.module.css";
import { FiX } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { v4 as uuidv4, v4 } from "uuid";
const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  uuidv4();
  return (
    <div
      className={
        isSidebarOpen === true ? `${c.sidebar} ${c.active}` : `${c.sidebar}`
      }
    >
      <FiX
        className={c.close}
        onClick={() => {
          setIsSidebarOpen(false);
        }}
      />
      <div className={c.avatarBox}>
        <Link className={c.avatarLink}>
          <RiAccountCircleFill
            style={{ width: "35px", height: "33px", marginRight: "10px" }}
          />
          <h3>Hello, Khusanov</h3>
        </Link>

        <div className={c.sidebarContent}>
          {SidebarData.map((item, index) => {
            return (
              <>
                <h3 className={c.sidebarTitle}>{item.title}</h3>
                {item.entries.map((t, index) => {
                  return (
                    <Link className={c.sidebarMain}>
                      <p key={v4} className={c.sidebarText}>
                        {t.title}
                      </p>
                      <MdOutlineNavigateNext className={c.sidebarNext} />
                    </Link>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
