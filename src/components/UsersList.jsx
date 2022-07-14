import axios from "axios";

const UsersList = ({ users, getUsers }) => {
  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };

  return (
    <ul className="container-card">
      {users.map((user) => (
        <li className="card" key={user.id}>
          <h2 className="card__title">
            {user.first_name} {user.last_name}
          </h2>
          <div className="info-container">
            <p className="info-title">Email:</p>
            <p>
              <i className="bx bx-envelope"></i> {user.email}
            </p>
          </div>
          <div className="info-container">
            <p className="info-title">Birthday:</p>
            <p>
              <i className="bx bxs-gift"></i> {user.birthday}
            </p>
          </div>
          <button className="delete" onClick={() => deleteUser(user.id)}>
            <i className="bx bxs-trash"></i> Delete
          </button>
          <button className="edit"><i className='bx bx-edit-alt'></i> Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;

// {
//   "id": 6818,
//   "email": "jose@gmail.com",
//   "password": "12345",
//   "first_name": "jose",
//   "last_name": "mar",
//   "birthday": "2022-07-10"
// }
