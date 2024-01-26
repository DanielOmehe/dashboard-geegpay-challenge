import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import Image from 'next/image'

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
	{
		name: "January",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "February",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "March",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "April",
		uv: 2780,
		pv: 3908,
		amt: 2600,
	},
	{
		name: "May",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "June",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "July",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "August",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "September",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "October",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "November",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "December",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

const getPath = (x, y, width, height) => {
	return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
		y + height / 3
	}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
		x + width
	}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
	const { fill, x, y, width, height } = props;

	return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const DashboardSalesTrend = () => {
	return (
		<>
			<section className="sales-trend">
				<div className="sales-trend-header">
					<h3>Sales Trend</h3>
					<div className="sort-by">
						<p>Sort by</p>
                        <select>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
					</div>
				</div>
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Bar
						dataKey="uv"
						fill="#8884d8"
						shape={<TriangleBar />}
						label={{ position: "top" }}
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={colors[index % 20]} />
						))}
					</Bar>
				</BarChart>
			</section>
            <style jsx>{`
                .sales-trend{
                    background: #fff;
                    width: 50.375rem;
                    height: 23.375rem;
                    padding: 1rem 1.2rem;
                    border-radius: .8rem;
                }

                .sales-trend-header{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .sort-by{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                }

                .sort-by button{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: .5rem;
                    padding: .3rem .6rem;
                    border-radius: 50px;
                    background: #fff;
                    border: 1px solid #cdcdcd;
                    cursor: pointer;
                }
            `}</style>
		</>
	);
};

export default DashboardSalesTrend;
