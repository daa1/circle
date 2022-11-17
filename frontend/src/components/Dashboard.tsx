import {getDevices} from '../apiClient';

function Dashboard() {

  getDevices();


  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
