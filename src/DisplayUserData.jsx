import Card from './Card';
import classes from './displayData.module.css';

const DisplayUserData = ({ userData }) => {
  const onClickUserHandler = (event) => {
    console.log('Clicked');
    console.log(event);
  };
  return (
    <Card>
      <table className={classes.mainDisplayDiv}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((each) => (
            <tr key={each.id} onClick={onClickUserHandler} id={each.id}>
              <td>
                {each.fName} {each.lName}
              </td>
              <td>
                {each.address}-{each.pin}
              </td>
              <td>{each.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
export default DisplayUserData;
