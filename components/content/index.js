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
                    padding: 1rem;
                    overflow-y: scroll;
                    scrollbar-color: #9CA4AB;
                    scrollbar-width: thin;
				}
			`}</style>
		</>
	);
};

export default DashboardContent;
