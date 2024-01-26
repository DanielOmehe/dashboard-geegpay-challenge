const DashboardOrderTrends = ({children}) => {
	return (
		<>
			<section className="order-trends">{children}</section>
            <style jsx>{`
                .order-trends{
                    width: 650px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    position: absolute;
                    right: 1rem;
                    top: 1rem;
                    gap: 1rem;
                }
            `}</style>
		</>
	);
};

export default DashboardOrderTrends;