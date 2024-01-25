const DashboardContent = ({children}) => {
	return (
		<>
			<main className="dashboard-content">{children}</main>
			<style jsx>{`
				.dashboard-content {
                    width: 95%;
                    height: 90vh;
                    position: absolute;
                    top: 80px;
                    left: 80px;
				}
			`}</style>
		</>
	);
};

export default DashboardContent;
