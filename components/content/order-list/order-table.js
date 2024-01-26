import Image from "next/image";

const OrderTable = ({ image, name, date, amount, status }) => {
	return (
		<>
			<ul className="order-table-row">
				<li className="order-name">
					<Image src={image} alt={name} width={40} height={40} />
					<p>{name}</p>
				</li>
				<li className="order-date">{date}</li>
				<li classNaame="order-amount">${amount}</li>
				<li className="order-status">{status}</li>
				<li className="order-invoice">
					<Image src={"/icons/invoice.svg"} alt="icon" width={15} height={15} />
					<p>view</p>
				</li>
			</ul>
			<style jsx>{`
				.order-table-row {
					display: flex;
                    align-items: center;
                    justify-content: space-between;
                    list-style: none;
				}

                .order-name{
                    display: flex;
                    align-items: center;
                    justfy-content: flex-start;
                    gap: 1rem;
                }
			`}</style>
		</>
	);
};

export default OrderTable;
