import { useDashboardContext } from "../../context";
import CashFlow from "./total-order";

const DashboardOrderTrends = () => {
	const { summaries } = useDashboardContext();
	return (
		<>
			<section className="order-trends">
				{summaries.map(
					({ icon, name, value, trend, graph, color, text_color }, indx) => (
						<CashFlow
							icon={icon}
							name={name}
							value={value}
							trend={trend}
							graph={graph}
							color={color}
							text_color={text_color}
						/>
					)
				)}
			</section>
			<style jsx>{`
				.order-trends {
					width: 650px;
					display: grid;
					grid-template-columns: 1fr 1fr;
					right: 1rem;
					top: 1rem;
                    margin: 0 0 0 .8rem;
					gap: 1rem;
				}

                @media only screen and (max-width: 1200px){
                    .order-trends{
                        width: 100%;
                        margin-left: .6rem;
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media only screen and (max-width: 1500px){
                    .order-trends{
                        width: 40%;
                        margin-left: .6rem;
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media only screen and (max-width: 912px){
                    .order-trends{
                        width: 100%;
                        grid-template-columns: 1fr;
                        gap: 1rem;
                        margin: 1rem 0 0 0;
                    }
                }
			`}</style>
		</>
	);
};

export default DashboardOrderTrends;
