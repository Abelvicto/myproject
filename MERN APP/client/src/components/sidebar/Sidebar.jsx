import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="./images/post (5).jpg" alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            dolores beatae quis officiis ad quas, similique sit nam modi odit
            eligendi ex dolor iusto, iste ut eius fugiat nihil commodi!
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Styles</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa fa-facebook-square"></i>
            <i className="sidebarIcon fa fa-twitter-square"></i>
            <i className="sidebarIcon fa fa-pinterest-square"></i>
            <i className="sidebarIcon fa fa-instagram-square"></i>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Sidebar;
