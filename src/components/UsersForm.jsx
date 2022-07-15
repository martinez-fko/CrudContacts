import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({ getUsers, selectedUser, closeModal , deselectUser }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    if (selectedUser !== null) {
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${selectedUser.id}/`,
          data
        )
        .then(() => {
          getUsers();
          reset(defaultValues);
          closeModal();
          deselectUser();
        });
    } else {
      axios.post("https://users-crud1.herokuapp.com/users/", data).then(() => {
        getUsers();
        reset(defaultValues);
        closeModal();
      });
    }
  };

  useEffect(() => {
    if (selectedUser !== null) {
      autofill();
    }
  }, []);

  const defaultValues = {
    birthday: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  };

  const autofill = () => {
    reset({
      birthday: selectedUser.birthday,
      email: selectedUser.email,
      first_name: selectedUser.first_name,
      last_name: selectedUser.last_name,
      password: selectedUser.password,
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="form">
      <div className="input-container">
        <i className="bx bxs-user"></i>
        <input
          type="text"
          placeholder="first name"
          id="first_name"
          {...register("first_name", { required: true })}
        />
        <input
          type="text"
          placeholder="last name"
          id="last_name"
          {...register("last_name", { required: true })}
        />
      </div>

      <div className="input-container">
        <i className="bx bx-envelope"></i>
        <input
          type="email"
          placeholder="email"
          id="email"
          {...register("email" , { required: true })}
        />
      </div>
      <div className="input-container">
        <i className="bx bxs-edit-alt"></i>
        <input
          type="password"
          placeholder="password"
          id="password"
          {...register("password", { required: true })}
        />
      </div>
      <div className="input-container">
        <i className="bx bxs-gift"></i>
        <input type="date" id="birthday" {...register("birthday" , { required: true })} />
      </div>
      <button className="create">
        {" "}
        {selectedUser !== null ? "Update" : "Create"}{" "}
      </button>
      <div>
        {errors.first_name?.type === "required" && (
          <span className="error">First names is required</span>
        )}
        {errors.last_name?.type === "required" && (
          <span className="error">Last name is required</span>
        )}
        {errors.email?.type === "required" && (
          <span className="error">Email is required</span>
        )}
        {errors.password?.type === "required" && (
          <span className="error">Password is required</span>
        )}
        {errors.birthday?.type === "required" && (
          <span className="error">Birthday is required</span>
        )}
      </div>
    </form>
  );
};

export default UsersForm;

// birthday: "0001-07-12"
// email: "danielrodriguezzdiazz@gmail.com"
// first_name: "Daniel"
// id: 6815
// last_name: "Rodriguez"
// password: "jsjsjs"
