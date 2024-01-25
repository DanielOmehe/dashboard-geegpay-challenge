import DashboardSideBar from "../components/sidebar";
import DashboardNavBar from "../components/navbar";
import DashboardHeader from "../components";
import DashboardContent from "../components/content";
import DashboardSalesTrend from "../components/content/sales-trend";

const Dashboard = () => {
	return (
		<>
			<DashboardHeader>
				<DashboardNavBar />
				<DashboardSideBar />
			</DashboardHeader>
            <DashboardContent>
               <DashboardSalesTrend />
            </DashboardContent>
		</>
	);
};

export default Dashboard;
