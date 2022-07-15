import { useEffect, useState } from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import axios from "axios";
import ModalForm from "./components/ModalForm";
import DarkMode from "./components/DarkMode";

function App() {
  const [users, setUsers] = useState([]);
  const [modalVisible, setmodalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((resp) => setUsers(resp.data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const closeModal = () => {
    setmodalVisible(false);
    let body = document.querySelector("body");
    body.classList.remove("scroll");
    let btnDark = document.querySelector(".circle-dark")
    btnDark.style.display = "block"
    deselectUser()
  };

  const editUser = user => {
    setmodalVisible(true)
    setSelectedUser(user)
  }

  const deselectUser = () => {
    setSelectedUser(null)
  }

  console.log(selectedUser);

  return (
    <div className="App">
      <div className="container">
        <div className="title-box">
          <h1>Users</h1>
          <button className="open-modal" onClick={() => setmodalVisible(true)}> <i className='bx bx-user-plus bx-sm'></i>Create user</button>
        </div>
        {modalVisible && (
          <ModalForm closeModal={closeModal} getUsers={getUsers} editUser={editUser} selectedUser={selectedUser} deselectUser={deselectUser}/>
        )}
        <UsersList users={users} getUsers={getUsers} editUser={editUser}/>
        <DarkMode />
      </div>
    </div>
  );
}

export default App;
