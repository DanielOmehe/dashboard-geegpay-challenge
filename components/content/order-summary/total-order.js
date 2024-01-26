import Image from "next/image";

const CashFlow = ({ icon, name, value, trend, graph, color, text_color }) => {
	return (
		<>
			<section className="total-order">
				<div className="total-order-header">
					<div className="total-order-image">
						<Image src={icon} alt="icon" width={20} height={20} />
					</div>
					<div className="total-order-graph">
						<Image src={graph} alt="graph" width={150} height={50} />
					</div>
				</div>
				<p className="order-text">{name}</p>
				<p className="order-number">{name === 'Total Income' ? `$${value}.000` : value}</p>
				<div className="total-order-footer">
					{" "}
					<div className="trend-value">
						<Image src={trend} alt="cash trend" width={15} height={15} />
						<p>23.5%</p>
					</div>
                    <p>vs. previous month</p>
				</div>
			</section>
			<style jsx>{`
				.total-order {
					width: 100%;
					padding: 1rem;
					background: #fff;
					border-radius: 0.8rem;
				}

				.total-order-header {
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				.total-order-header .total-order-image {
					border: 1px solid #cdcdcd;
					border-radius: 50px;
					padding: 0.5rem;
                    width: 40px;
                    height: 40px;
				}

				.order-text {
					font-weight: 400;
					font-size: 1rem;
				}

				.order-number {
					font-weight: 500;
					font-size: 1.5rem;
                    margin-top: .4rem;
				}

                .total-order-footer{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: .6rem;
                }

                .trend-value{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: .85rem;
                    background: ${color};
                    padding: .3rem .4rem;
                    border-radius: 50px;
                    color: ${text_color};
                    font-size: .8rem;
                }
			`}</style>
		</>
	);
};

export default CashFlow;
