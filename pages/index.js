import DashboardSideBar from "../components/sidebar";
import DashboardNavBar from "../components/navbar";
import DashboardHeader from "../components";
import DashboardContent from "../components/content";
import DashboardSalesTrend from "../components/content/sales-trend";
import DashboardOrderTrends from "../components/content/order-summary";
import CashFlow from "../components/content/order-summary/total-order";
import OrderList from "../components/content/order-list";
import OrderTable from "../components/content/order-list/order-table";

const Dashboard = () => {
	return (
		<>
			<DashboardHeader>
				<DashboardNavBar />
				<DashboardSideBar />
			</DashboardHeader>
			<DashboardContent>
				<DashboardSalesTrend />
				<DashboardOrderTrends>
					<CashFlow
						icon={"/icons/order.svg"}
						name={"Total Order"}
						value={350}
						trend={"icons/trend_up.svg"}
						graph={"/icons/order_graph.svg"}
						color={"rgba(52, 202, 165, 0.12)"}
						text_color={"#34caa5"}
					/>
					<CashFlow
						icon={"/icons/refund.svg"}
						name={"Total Refund"}
						value={270}
						trend={"icons/trend_down.svg"}
						graph={"/icons/refund_graph.svg"}
						color={"rgba(237, 84, 78, 0.1)"}
						text_color={"#ed544e"}
					/>
					<CashFlow
						icon={"/icons/cart.svg"}
						name={"Average Sales"}
						value={1567}
						trend={"icons/trend_down.svg"}
						graph={"/icons/sales_graph.svg"}
						color={"rgba(237, 84, 78, 0.1)"}
						text_color={"#ed544e"}
					/>
					<CashFlow
						icon={"/icons/order.svg"}
						name={"Total Income"}
						value={350}
						trend={"icons/trend_up.svg"}
						graph={"/icons/income_graph.svg"}
						color={"rgba(52, 202, 165, 0.12)"}
						text_color={"#34caa5"}
					/>
				</DashboardOrderTrends>
				<OrderList>
					<OrderTable
						image={"/images/marcus.png"}
						name="Marcus Bergson"
						date="Nov 15, 2023"
						amount="80,000"
						status="Paid"
					/>
					<OrderTable
						image={"/images/jay.png"}
						name="Jaydon Vaccaro"
						date="Nov 15, 2023"
						amount="150,000"
						status="Refund"
					/>
					<OrderTable
						image={"/images/corey.png"}
						name="Corey Schleifer"
						date="Nov 14, 2023"
						amount="87,000"
						status="Paid"
					/>
					<OrderTable
						image={"/images/cooper.png"}
						name="Cooper Press"
						date="Nov 14, 2023"
						amount="100,000"
						status="Refund"
					/>
					<OrderTable
						image={"/images/phil.png"}
						name="Phillip Lubin"
						date="Nov 13, 2023"
						amount="78,000"
						status="Paid"
					/>
				</OrderList>
			</DashboardContent>
		</>
	);
};

export default Dashboard;
