import { getDevices } from "../apiClient";
import { SecondaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-button/button.min.css";
import "./Dashboard.css";

function Dashboard() {
  getDevices();

  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard">
        <SecondaryButton
          onClick={() => console.log("Klikk!")}
          className="jkl-spacing-l--top"
        >
          Get devices
        </SecondaryButton>

      </div>
    </>
  );
}

export default Dashboard;
