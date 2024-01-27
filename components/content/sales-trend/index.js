import {
	BarChart,
	Bar,
	Rectangle,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { useDashboardContext } from '../../context'

const data = [
	{
		name: "Jan",
		uv: 6000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Feb",
		uv: 21000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Mar",
		uv: 3500,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Apr",
		uv: 28000,
		pv: 3908,
		amt: 2600,
	},
	{
		name: "May",
		uv: 9000,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "June",
		uv: 45000,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "July",
		uv: 9000,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "Aug",
		uv: 27000,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "Sept",
		uv: 34000,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "Oct",
		uv: 4800,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "Nov",
		uv: 25000,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "Dec",
		uv: 22000,
		pv: 4300,
		amt: 2100,
	},
];

const DashboardSalesTrend = () => {
    const { handleSelect, option } = useDashboardContext()
	return (
		<>
			<section className="sales-trend">
				<div className="sales-trend-header">
					<h3>Sales Trend</h3>
					<div className="sort-by">
						<p>Sort by</p>
						<select value={option} onChange={(e) => handleSelect(e)}>
							<option value={'Weekly'}>Weekly</option>
							<option selectedvalue={'Monthly'}>Monthly</option>
							<option value={'Yearly'}>Yearly</option>
						</select>
					</div>
				</div>
				<ResponsiveContainer
					width="100%"
					height="100%"
					style={{
                        padding: '1rem 0',
					}}
				>
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar
							dataKey="pv"
							fill="#ED544Ede"
							activeBar={<Rectangle fill="pink" stroke="blue" />}
						/>
						<Bar
							dataKey="uv"
							fill="#34CAA5ab"
							activeBar={<Rectangle fill="gold" stroke="purple" />}
						/>
					</BarChart>
				</ResponsiveContainer>
			</section>
			<style jsx>{`
				.sales-trend {
					background: var(--bg-secondary);
					width: 50.375rem;
					height: 23.375rem;
					padding: 1rem 1.2rem;
					border-radius: 0.8rem;
                    color: var(--text-primary);
                    box-shadow: 0 0 1px var(--secondary);
				}

				.sales-trend-header {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				.sort-by {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 1rem;
				}

				.sort-by select {
					padding: 0.3rem 0.6rem;
					border-radius: 50px;
					background: var(--bg-secondary);
					border: 1px solid #cdcdcd;
                    color: var(--text-primary);
				}

                @media only screen and (max-width: 1200px){
                    .sales-trend{
                        width: 100%;
                    }
                }

                @media only screen and (max-width: 1500px){
                    .sales-trend{
                        width: 53%;
                    }
                }

                @media only screen and (max-width: 912px){
                    .sales-trend{
                        width: 100%;
                    }
                }
                @media only screen and (max-width: 912px){
                    .sales-trend{
                        width: 100%;
                    }
                }
			`}</style>
		</>
	);
};

export default DashboardSalesTrend;
