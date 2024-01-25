import moment from "moment";
import Image from "next/image";

const DashboardNavBar = () => {
	return (
		<>
			<nav className="dashboard-navbar">
				<h1>Dashboard</h1>
				<div className="dashboard-content">
					<div className="dashboard-search">
						<Image
							src={"/icons/search.svg"}
							width={20}
							height={20}
							alt="User Avatar"
						/>
						<input type="search" placeholder="Search..." autoFocus />
					</div>
					<div className="dashboard-date">
						<Image
							src={"/icons/calendar.svg"}
							width={20}
							height={20}
							alt="User Avatar"
						/>
						<p>{moment().format("LL")}</p>
					</div>
                    <div className="dashboard-notification">
                        <Image src={'/icons/notification.svg'} width={20} height={20} alt="Notification bell" />
                    </div>
					<div className="dashboard-user-account">
						<Image
							src={"/images/user-avatar.png"}
							width={40}
							height={40}
							alt="User Avatar"
						/>
						<div className="user-account">
							<h3>Justin Bergson</h3>
							<p>justin@gmail.com</p>
						</div>
						<Image
							src={"/icons/arrow_down.svg"}
							alt="Arrow Down"
							width={20}
							height={20}
						/>
					</div>
				</div>
			</nav>
			<style jsx>{`
				.dashboard-navbar {
					height: 80px;
					width: 95%;
					margin-left: 80px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 1.12rem;
                    background: #fafafa;
                    box-shadow: 0 0 2px rgba(0,0,0,.23);
				}

				h1 {
					font-family: "Plus Jakarta Sans", sans-serif;
					font-size: 1.25rem;
				}

                .dashboard-content{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 1.5rem;
                }

				.dashboard-search {
					width: 400px;
					height: 2.5rem;
					padding-left: 0.75rem;
					display: flex;
					align-items: center;
					border: 1px solid #cdcdcd;
					border-radius: 50px;
                    background: #fff;
				}

				input {
					height: 100%;
					width: 100%;
					font-size: 1rem;
					border: none;
					outline: none;
					gap: 1rem;
					padding-left: 0.5rem;
					background: none;
					font-family: "Inter";
				}

				input::placeholder {
					color: #a9a9a9;
				}

				.dashboard-date {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					gap: 0.75rem;
                    margin-left: 2rem;
				}

                .dashboard-date p{
                    font-size: .9rem;
                    font-family: 'Inter', sans-serif;
                }

				.dashboard-user-account {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					border: 1px solid #cdcdcd;
					border-radius: 50px;
					padding: .25rem 0.5rem;
                    cursor: pointer;
                    gap: .65rem;
				}

                .user-account h3{
                    font-size: 1rem;
                    font-weight: 500;
                    text-align: right;
                }

                .dashboard-notification{
                    border: 1px solid #cdcdcd;
                    width: 35px;
                    height: 35px;
                    margin-left: 1.25rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50px;
                    cursor: pointer;
                }
			`}</style>
		</>
	);
};

export default DashboardNavBar;
