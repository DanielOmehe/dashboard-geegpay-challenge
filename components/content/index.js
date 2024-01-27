const DashboardContent = ({ children }) => {
	return (
		<>
			<main className="dashboard-content">{children}</main>
			<style jsx>{`
				.dashboard-content {
					width: 100%;
					height: 95vh;
					gap: 1rem;
                    overflow: auto;
                    scrollbar-width: thin;
                    scrollbar-color: var(--secondary);
				}

				@media only screen and (max-width: 912px) {
					.dashboard-content {
						width: 100vw;
					}
				}
			`}</style>
		</>
	);
};

export default DashboardContent;

export const DashboardContentWrapper = ({ children }) => {
	return (
		<>
			<section className='dashboard-content-wrapper'>{children}</section>
			<style jsx>{`
				.dashboard-content-wrapper {
					width: 96%;
                    height: fit-content;
                    margin: 0 0 0 80px;
                    padding: 1rem;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
				}

                @media only screen and (max-width: 1200px){
                    .dashboard-content-wrapper {
                        margin: 0;
                        width: 100%;
                        padding: .8rem;
                        display: grid;
                        gap: .6rem;
                        grid-template-columns: 48vw 48vw;
                    }
                }

                @media only screen and (max-width: 1500px){
                    .dashboard-content-wrapper {
                        margin-left: 80px;
                        width: 100%;
                        padding: .8rem;
                        display: flex;
                        flex-wrap: wrap;
                        gap: .6rem;
                    }
                }

                @media only screen and (max-width: 912px){
                    .dashboard-content-wrapper {
                        margin: 0;
                        width: 100%;
                        padding: .8rem;
                        align-item: center;
                        justify-content: center;
                    }
                }
			`}</style>
		</>
	);
};
