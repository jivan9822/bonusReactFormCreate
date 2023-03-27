import { useState } from 'react';
import DisplayUserData from './DisplayUserData';
import UserInput from './UserInputData';

function App() {
  const [userData, setUserData] = useState([]);
  const getUserData = (data) => {
    setUserData((old) => [data, ...old]);
  };
  return (
    <div>
      <UserInput onGetUserData={getUserData} />
      <DisplayUserData userData={userData} />
    </div>
  );
}

export default App;
