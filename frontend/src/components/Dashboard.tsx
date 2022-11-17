import {getAllDevices, getDeviceInfo} from '../apiClient';

function Dashboard() {

  getAllDevices();
  getDeviceInfo();


  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
