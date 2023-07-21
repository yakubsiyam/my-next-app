import DashboardLayout from "@/components/Layouts/DashboardLayout";
import RootLayout from "@/components/Layouts/RootLayout";

const AdminHomePage = () => {
  return (
    <div>
      <h1 style={{ color: "#000" }}>This is admin page</h1>
    </div>
  );
};

export default AdminHomePage;

AdminHomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
