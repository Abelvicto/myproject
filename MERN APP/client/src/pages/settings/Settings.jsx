import "./settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="./images/story3.jpg" alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
              <input type="fileInput" style={{ display: "none" }} />
            </label>
          </div>
          <label>Username</label>
          <input type="text" placeholder="victor" />
          <label>Email</label>
          <input type="Email" placeholder="victorthewebdev009@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
