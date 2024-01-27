import DashboardSideBar from "../components/content/sidebar";
import DashboardNavBar from "../components/navbar";
import DashboardHeader from "../components";
import DashboardContent, {
	DashboardContentWrapper,
} from "../components/content";
import DashboardSalesTrend from "../components/content/sales-trend";
import DashboardOrderTrends from "../components/content/order-summary";
import OrderList from "../components/content/order-list";
import TopPlatform from "../components/content/top-platform";

const Dashboard = () => {
	return (
		<>
			<DashboardHeader>
				<DashboardNavBar />
			</DashboardHeader>
			<DashboardContent>
				<DashboardSideBar />
				<DashboardContentWrapper>
					<DashboardSalesTrend />
					<DashboardOrderTrends />
					<OrderList />
					<TopPlatform />
				</DashboardContentWrapper>
			</DashboardContent>
		</>
	);
};

export default Dashboard;
