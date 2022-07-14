import React, { useEffect } from 'react';
import UsersForm from './UsersForm';

const ModalForm = ({closeModal , getUsers}) => {


    let body = document.querySelector("body")
    body.classList.add( 'scroll')

    let btnDark = document.querySelector(".circle-dark")
    btnDark.style.display = "none"


    return (
        <div className='modal'>
            <div className="modal-box">
                <button className='closed' onClick={closeModal}> <i className='bx bx-x bx-sm'></i></button>
                <h2 className='title-model'>Create User</h2>
                <UsersForm getUsers={getUsers}/>
            </div>
        </div>
    );
};

export default ModalForm;