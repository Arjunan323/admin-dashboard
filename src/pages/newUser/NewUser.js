import React from "react";
import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Jhon" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Jhon smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Jhon@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="email" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="email" placeholder="9884020176" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="email" placeholder="USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="others" value="others" />
            <label for="others">Others</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">no</option>
          </select>
        </div>
        <div className="newUserItem">
          <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
