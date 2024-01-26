const OrderList = ({ children }) => {
	return (
		<>
			<section className="order-list-summary">
				<div className="order-list-header">
					<h3>Last Order</h3>
					<p>See All</p>
				</div>
				<div className="order-list-table">
					<ul className='order-list-table-head'>
						<li>Name</li>
						<li>Date</li>
						<li>Amount</li>
						<li>Status</li>
						<li>Invoice</li>
					</ul>
					<div className="order-list-table-body">{children}</div>
				</div>
			</section>
			<style jsx>{`
				.order-list-summary {
					background: #fff;
					width: 50.375rem;
					height: 23.375rem;
					padding: 1rem 1.2rem;
					border-radius: 0.8rem;
					margin-top: 1rem;
				}

				.order-list-header {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin: 0.8rem;
				}

				.order-list-header h3 {
					font-size: 1.2rem;
				}

				.order-list-header p {
					font-size: 1rem;
					color: var(--color-green);
				}

				.order-list-table {
					width: 100%;
				}

				.order-list-table-head {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    list-style: none;
                    color: var(--color-grey);
                    font-size: 1rem;
				}

                .order-list-table-body{
                    width: 100%;
                    border: 2px solid red;
                }
			`}</style>
		</>
	);
};

export default OrderList;
