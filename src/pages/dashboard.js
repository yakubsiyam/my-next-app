import React from "react";
import DashboardLayout from "../components/Layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <div>
      <h1 style={{ color: "#000" }}>This is dashboard</h1>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
