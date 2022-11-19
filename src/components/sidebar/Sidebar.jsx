import c from './Sidebar.module.css';
import { FiX } from 'react-icons/fi';
import { RiAccountCircleFill } from 'react-icons/ri';
import { MdOutlineNavigateNext } from 'react-icons/md'
import { Link } from "react-router-dom";
import { SidebarData } from './SidebarData';

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {
  return (
    <div className={isSidebarOpen === true ? `${c.sidebar} ${c.active}` : `${c.sidebar}`}>
        <FiX className={c.close} onClick={() => {setIsSidebarOpen(false)}}/>
        <div className={c.avatarBox}>
          <Link className={c.avatarLink}>
            <RiAccountCircleFill style={{width: "35px", height:"33px", marginRight:"10px"}}/>
            <h3>Hello, Sardor</h3>
          </Link>

          <div className={c.sidebarContent}>
           {SidebarData.map((item, index) => {
              return (
               <>
                 <h3 className={c.sidebarTitle}>{item.title}</h3>
                 {item.entries.map((t, index) => {
                  return (
                    <Link className={c.sidebarMain}>
                      <p className={c.sidebarText}>{t.title}</p>
                      <MdOutlineNavigateNext className={c.sidebarNext}/>
                    </Link>
                  )
                 })}
               </>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default Sidebar