import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFirstName, updateLastName } from '../redux/actions';

const Form = () => {
  const dispatch = useDispatch();
  const nameReducer = useSelector((state) => state.nameReducer);
  const { firstName, lastName, message } = nameReducer;

  const handleFirstName = () => {
    dispatch(updateFirstName('Jane'));
  };
  const handleLastName = () => {
    dispatch(updateLastName('Smith'));
  };
  const handleReset = () => {
    dispatch({ type: '', action: {} });
  };

  return (
    <>
      <div className="container">
        <label>First Name: {firstName}</label>
        <button className="update-btn" type="button" onClick={handleFirstName}>
          Update First Name
        </button>
        <label>Last Name: {lastName}</label>
        <button className="update-btn" type="button" onClick={handleLastName}>
          Update Last Name
        </button>

        {message && <label className="msg">**{message}**</label>}
        <br />
        <button className="reset-btn" type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Form;
