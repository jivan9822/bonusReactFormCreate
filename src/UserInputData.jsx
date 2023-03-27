import classes from './UserInput.module.css';
import { useState } from 'react';
import Card from './Card';

const UserInput = (props) => {
  const [userData, setUserData] = useState({
    fName: '',
    lName: '',
    address: '',
    pin: '',
    mobile: '',
    id: '',
  });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    userData.id = Math.random();
    props.onGetUserData(userData);
    setUserData({ fName: '', lName: '', address: '', pin: '', mobile: '' });
  };
  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.label}>
          <label htmlFor='firstName'>FirstName</label>
          <input
            type='text'
            name='fName'
            value={userData.fName}
            onChange={onChangeHandler}
            autoFocus
          />
        </div>
        <div className={classes.label}>
          <label htmlFor='lastName'>LastName</label>
          <input
            type='text'
            name='lName'
            value={userData.lName}
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes.label}>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            name='address'
            value={userData.address}
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes.label}>
          <label htmlFor='pinCode'>PinCode</label>
          <input
            type='text'
            name='pin'
            value={userData.pin}
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes.label}>
          <label htmlFor='mobileNumber'>MobileNumber</label>
          <input
            type='text'
            name='mobile'
            value={userData.mobile}
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes.label}>
          <input type='submit' className={classes.btn} />
        </div>
      </form>
    </Card>
  );
};
export default UserInput;
