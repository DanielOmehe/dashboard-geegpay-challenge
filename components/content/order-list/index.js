import { useDashboardContext } from "../../context";
import OrderTable from "./order-table";

const OrderList = () => {
	const { orders } = useDashboardContext();
	return (
		<>
			<section className="order-list-summary">
				<div className="order-list-header">
					<h3>Last Order</h3>
					<p>See All</p>
				</div>
				<div className="order-list-table-container">
					{" "}
					<table className="order-list-table">
						<thead className="order-list-table-head">
							<tr>
								{" "}
								<th>Name</th>
								<th>Date</th>
								<th>Amount</th>
								<th>Status</th>
								<th>Invoice</th>
							</tr>
						</thead>
						<tbody className="order-list-table-body">
							{orders.map(({ image, name, date, amount, status }, indx) => (
								<OrderTable
									image={image}
									name={name}
									date={date}
									amount={amount}
									status={status}
								/>
							))}
						</tbody>
					</table>
				</div>
			</section>
			<style jsx>{`
				.order-list-summary {
					background: var(--bg-secondary);
					width: 50.375rem;
					height: fit-content;
					padding: 0.8rem 1.2rem;
					border-radius: 0.8rem;
					margin-top: 1rem;
					color: var(--text-primary);
					box-shadow: 0 0 1px var(--secondary);
				}

				.order-list-header {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 0.2rem;
				}

				.order-list-header h3 {
					font-size: 1.2rem;
				}

				.order-list-header p {
					font-size: 1rem;
					color: var(--success);
				}

				.order-list-table-container {
					overflow-x: auto;
					overflow-y: hidden;
					scrollbar-width: thin;
					scrollbar-color: var(--secondary);
				}

				.order-list-table {
					width: 100%;
					margin-top: 0;
					border-collapse: collapse;
				}

				.order-list-table-head tr th {
					border-bottom: 1px solid var(--secondary);
					text-align: left;
					color: var(--secondary);
					padding: 0.8rem 0;
					margin-bottom: 1.3rem;
				}

				.order-list-table-body {
					width: 100%;
					padding: 0 0.5rem;
					margin-top: 1rem;
				}

				@media only screen and (max-width: 1500px) {
					.order-list-summary {
						width: 53%;
					}
				}

				@media only screen and (max-width: 1200px) {
					.order-list-summary {
						width: 100%;
					}
				}

				@media only screen and (max-width: 912px) {
					.order-list-summary {
						width: 100%;
					}

					.order-list-table {
						height: fit-content;
					}

					.order-list-table-head .order-list-table-body {
						width: 35rem;
					}
				}
			`}</style>
		</>
	);
};

export default OrderList;
