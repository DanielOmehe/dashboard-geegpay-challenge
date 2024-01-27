import moment from "moment";
import Image from "next/image";
import { useDashboardContext } from "../context";
import { Calendar, ArrowDown, Notification } from "../icons";

const DashboardNavBar = () => {
	const {
		showNotification,
		toggleShowNotification,
		toggleShowSidebar,
		showInfo,
		toggleShowInfo,
	} = useDashboardContext();
	return (
		<>
			<nav className="dashboard-navbar">
				<div className="dashboard-logo">
					<div className="hamburger-menu" onClick={toggleShowSidebar}>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
					</div>
					<div className="dashboard-logo-image">
						<Image src={"/icons/logo.svg"} alt="logo" width={35} height={35} />
					</div>
					<h1>Dashboard</h1>
				</div>
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
						<Calendar />
						<p>{moment().format("LL")}</p>
					</div>
					<div
						className="dashboard-notification"
						onClick={toggleShowNotification}
					>
						<Notification />
						<div className="notification-container">
							<div className="notification-list">
								<p>Nothing to see here</p>
							</div>
						</div>
					</div>
					<div className="dashboard-user-account" onClick={toggleShowInfo}>
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
						<ArrowDown />
						<div className="account-info">
							<div className="account-info-header">
								<Image
									src={"/images/user-avatar.png"}
									width={40}
									height={40}
									alt="User Avatar"
								/>
								<div className="account-user">
									<h3>Justin Bergson</h3>
									<p>justin@gmail.com</p>
								</div>
							</div>
							<ul className="account-info-items">
								<li>Account</li>
								<li>Transactions</li>
								<li>Inventory</li>
								<li>Team</li>
								<li>Sales</li>
							</ul>
						</div>
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
					box-shadow: 0 0 2px rgba(0, 0, 0, 0.23);
				}

                .dashboard-logo{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: .4rem;
                }

                .dashboard-logo-image{
                    display: none;
                }

                .account-user{
                    font-weight: 500;
                }

                .account-info{
                    display: ${showInfo ? "block" : "none"};
                    width: 300px;
                    z-index: 100;
                    padding: .5rem;
                    height: auto;
                    border-radius: .6rem;
                    background: var(--bg-secondary);
                    position: absolute;
                    top: 90px;
                    right: 1rem;
                    box-shadow: 0 0 3px var(--secondary);
                }

                .account-info-header{
                    border-bottom: 1px solid var(--secondary);
                    display: flex;
                    align-item: center;
                    justify-content: space-between;
                    padding:  .6rem .8rem;
                }

                .account-info-items{
                    width: 100%;
                    margin: .8rem 0;
                }

                .account-info-items li{
                    width: 100%;
                    margin: .3rem 0;
                    padding: .6rem .8rem;
                    height: 40px;
                    border-radius: .5rem;
                }

                .account-info-items li:hover{
                    background: var(--bg-primary);
                }

                .hamburger-menu{
                    display: none;
                }

				h1 {
					font-family: "Plus Jakarta Sans", sans-serif;
					font-size: 1.25rem;
				}

				.dashboard-content {
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
					background: var(--bg-secondary);
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

				.dashboard-date p {
					font-size: 0.9rem;
					font-family: "Inter", sans-serif;
				}

				.dashboard-user-account {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					border: 1px solid #cdcdcd;
					border-radius: 50px;
					padding: 0.25rem 0.5rem;
					cursor: pointer;
					gap: 0.65rem;
				}

				.user-account h3 {
					font-size: 1rem;
					font-weight: 500;
					text-align: right;
				}

				.dashboard-notification {
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

				.notification-container {
					width: 20rem;
					height: 50px;
					padding: 0.5rem;
					background: var(--bg-secondary);
					position: absolute;
					top: 85px;
					right: 10rem;
					z-index: 3;
					box-shadow: 0 0 2px rgba(0, 0, 0, 0.56);
					border-radius: 0.5rem;
					display: ${showNotification ? "block" : "none"};
				}

				.notification-list {
					width: 100%;
					height: 100%;
                    box-shadow: inset 0 0 .1rem rgba(0,0,0,.34);
					border-radius: 0.3rem;
					display: flex;
					align-items: center;
                    justify-content: center;
					font-size: 1.2rem;
				}

                @media only screen and (max-width: 1500px) and (min-width: 1200px){
                    .dashboard-navbar{
                        margin-left: 75px;
                        width: 100vw;
                        height: 80px;
                        align-items: center;
                        justify-content: flex-start;
                        padding: .6rem;
                        overflow: hidden;
                    }

                    .hamburger-menu{
                        display: none;
                    }

                    .dashboard-logo-image{
                        display: none;
                    }

                    .dashboard-navbar h1{
                        font-size: 1.3rem;
                    }

                    .dashboard-content{
                        display: flex;
                        gap: 0;
                        margin-left: 33rem;
                    }

                    .dashboard-search{
                        width: 300px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0 .4rem;
                        margin-left: 1rem;
                    }

                    .dashboard-date{
                        margin: 0 1rem;
                        width: fit-content;
                    }

                    .dashboard-user-account{
                        padding: .2rem;
                    }

                    .dashboard-notification{
                        border: none;
                        margin: .2rem;
                    }

                    .notification-container{
                        right: 1rem;
                    }
                }

                @media only screen and (max-width: 1200px){
                    .dashboard-navbar{
                        margin-left: 0;
                        width: 100vw;
                        height: 80px;
                        align-items: center;
                        justify-content: space-between;
                        padding: .6rem;
                        overflow: hidden;
                    }

                    .hamburger-menu{
                        display: block;
                        border: 1px solid var(--secondary);
                        border-radius: .2rem;
                        padding: .1rem .3rem;
                    }

                    .dashboard-logo{
                        gap: .8rem;
                    }

                    .line{
                        width: 23px;
                        border: 1px solid var(--secondary);
                        margin: .3rem 0;
                    }

                    .dashboard-logo-image{
                        display: block;
                    }

                    .dashboard-navbar h1{
                        font-size: 1.3rem;
                    }

                    .dashboard-content{
                        display: flex;
                        gap: 0;
                        margin-right: .6rem;
                    }

                    .dashboard-search{
                        width: 300px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0 .4rem;
                        margin-left: 1rem;
                    }

                    .dashboard-date{
                        margin: 0 1rem;
                        width: fit-content;
                    }

                    .dashboard-user-account{
                        padding: .2rem;
                    }

                    .dashboard-notification{
                        border: none;
                        margin: .2rem;
                    }

                    .notification-container{
                        right: 1rem;
                    }
                }    

                @media only screen and (max-width: 912px){
                    .dashboard-navbar{
                        margin-left: 0;
                        width: 100vw;
                        height: 80px;
                        align-items: center;
                        justify-content: space-between;
                        padding: .6rem;
                        overflow: hidden;
                    }

                    .hamburger-menu{
                        display: block;
                        border: 1px solid var(--secondary);
                        border-radius: .2rem;
                        padding: .1rem .3rem;
                    }

                    .dashboard-logo{
                        gap: .8rem;
                    }

                    .line{
                        width: 23px;
                        border: 1px solid var(--secondary);
                        margin: .3rem 0;
                    }

                    .dashboard-logo-image{
                        display: block;
                    }

                    .dashboard-navbar h1{
                        font-size: 1.3rem;
                    }

                    .dashboard-content{
                        display: flex;
                        gap: 0;
                        margin-right: .6rem;
                    }

                    .dashboard-search{
                        width: 300px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0 .4rem;
                        margin-left: 1rem;
                    }

                    .dashboard-date{
                        margin: 0 1rem;
                        width: fit-content;
                    }

                    .dashboard-user-account{
                        border: none;
                        width: 50px;
                        height: 50px:
                        padding: 0;
                        overflow: hidden;
                    }
                    
                    .user-account{
                        display: none;
                    }

                    .dashboard-notification{
                        border: none;
                        margin: .2rem;
                    }

                    .notification-container{
                        right: 1rem;
                    }
                }    

                @media only screen and (max-width: 600px){
                    .dashboard-date p{
                        display: none;
                    }

                    .dashboard-search input{
                        display: none;
                    }

                    .dashboard-search{
                        width: 35px;
                        height: 35px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0 .4rem;
                        margin: 0;
                        border: none;
                        background: none;
                    }
                }
			`}</style>
		</>
	);
};

export default DashboardNavBar;
