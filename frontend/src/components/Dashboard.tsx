import {getAllDevices, getDeviceInfo, rotateServo} from '../apiClient';

function Dashboard() {

  //getAllDevices();
  //getDeviceInfo();


  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={rotateServo}>ROTATE</button>
    </div>
  );
}

export default Dashboard;
