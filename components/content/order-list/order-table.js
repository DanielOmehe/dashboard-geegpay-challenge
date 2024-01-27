import Image from "next/image";

const OrderTable = ({ image, name, date, amount, status }) => {
	return (
		<>
			<tr className="order-table-row">
				<td className="order-name">
					<Image src={image} alt={name} width={40} height={40} />
					<p>{name}</p>
				</td>
				<td className="order-date">{date}</td>
				<td classNaame="order-amount">${amount}</td>
				<td className="order-status">{status}</td>
				<td className="order-invoice">
					<Image src={"/icons/invoice.svg"} alt="icon" width={15} height={15} />
					<p>view</p>
				</td>
			</tr>
			<style jsx>{`
				.order-table-row {
                    padding: .5rem 0;
				}

				.order-table-row td {
                    padding: .38rem 0;
                    margin-top: .1rem;
				}

                .order-status{
                    color: ${status === 'Paid' ? 'var(--success)' : 'var(--error)'};
                }

                .order-name{
                    display: flex;
                    align-items: center;
                    justfy-content: flex-start;
                    gap: 1rem;
                }

                .order-invoice{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: .2rem;
                    transform: translateY(-.85rem);
                }

                @media only screen and (max-width: 912px){

                }
			`}</style>
		</>
	);
};

export default OrderTable;
