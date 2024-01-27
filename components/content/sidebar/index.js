import Image from "next/image";
import { useDashboardContext } from "../../context";
import { Category, Moon } from "../../icons";

const DashboardSideBar = () => {
	const { currentTheme, toggleTheme, showSideBar } = useDashboardContext();
	return (
		<>
			<aside className="dashboard-sidebar">
				<div className="dashboard-logo">
					<Image src={"/icons/logo.svg"} alt="Logo" width={40} height={40} />
				</div>
				<ul className="dashboard-items">
					<li className="dashboard-item">
						<Category />
					</li>
					<li className="dashboard-item">
						<Image
							src={"/icons/trend.svg"}
							alt="category"
							width={25}
							height={25}
						/>
					</li>
					<li className="dashboard-item">
						<Image
							src={"/icons/user.svg"}
							alt="category"
							width={25}
							height={25}
						/>
					</li>
					<li className="dashboard-item">
						<Image
							src={"/icons/box.svg"}
							alt="category"
							width={25}
							height={25}
						/>
					</li>
					<li className="dashboard-item">
						<Image
							src={"/icons/discount.svg"}
							alt="category"
							width={25}
							height={25}
						/>
					</li>
					<li className="dashboard-item">
						<Image
							src={"/icons/circle.svg"}
							alt="category"
							width={25}
							height={25}
						/>
					</li>
				</ul>
				<div className="dashboard-theme-switcher" onClick={toggleTheme}>
					<div className={currentTheme === "light" ? "current-theme" : ""}>
						<Image src={"/icons/sun.svg"} alt="sun" width={20} height={20} />
					</div>
					<div className={currentTheme === "dark" ? "current-theme" : ""}>
						<Moon />
					</div>
				</div>
				<ul className="dashboard-items-down">
					<li className="dashboard-item">
						<Image
							src={"/icons/arrow_right.svg"}
							alt="arrow Right"
							width={20}
							height={20}
						/>
					</li>
					<li className="dashboard-item">
						<Image
							src={"/icons/setting.svg"}
							alt="arrow Right"
							width={20}
							height={20}
						/>
					</li>
					<li className="dashboard-item">
						<Image
							src={"/icons/logout.svg"}
							alt="arrow Right"
							width={20}
							height={20}
						/>
					</li>
				</ul>
			</aside>
			<style jsx>{`
				.dashboard-sidebar {
					height: 100vh;
					width: 5%;
					padding: 1.5rem 0;
					position: absolute;
					top: 0;
					left: 0;
					display: flex;
					align-items: center;
					flex-direction: column;
					border-right: 1px solid #cdcdcd;
				}

				.dashboard-items {
					margin-top: 1.2rem;
					display: flex;
					flex-direction: column;
					gap: 1rem;
					width: 100%;
				}

				.dashboard-item.current {
					border-right: 2px solid black;
					border-radius: 1rem;
				}

				.dashboard-item {
					list-style: none;
					width: 100%;
					display: flex;
					justify-content: center;
				}

				.dashboard-theme-switcher div {
					width: 28px;
					height: 28px;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 0.2rem;
					border-radius: 50px;
				}

				.current-theme {
					background: var(--success);
				}

				.dashboard-theme-switcher {
					display: flex;
					align-item: center;
					justify-content: center;
					gap: 1rem;
					flex-direction: column;
					background: var(--bg-secondary);
					padding: 0.25rem;
					margin-top: 3rem;
					border-radius: 50px;
				}

				.dashboard-items-down {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					margin-top: 13rem;
				}

				@media only screen and (max-width: 1200px) {
					.dashboard-sidebar {
						width: 80px;
						height: 90%;
						position: fixed;
						top: 80px;
						left: ${showSideBar ? "0" : "-80px"};
						z-index: 20;
						padding: 0.5rem 0;
						overflow: auto;
						scrollbar: none;
						transition: left 0.3s linear;
					}

					.dashboard-logo {
						display: none;
					}

					.dashboard-items {
						height: 100%;
						align-items: center;
						justify-content: center;
						transform: translateY(-10px);
						padding: 0;
					}

					.dashboard-item {
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						margin: 0;
					}

					.dashboard-items-down {
						margin-top: 8rem;
						margin-bottom: 1rem;
					}
				}

				@media only screen and (max-width: 912px) {
					.dashboard-sidebar {
						width: 80px;
						height: 90%;
						position: fixed;
						top: 80px;
						left: ${showSideBar ? "0" : "-80px"};
						z-index: 20;
						background: var(--bg-secondary);
						padding: 0.5rem 0;
						overflow: auto;
						scrollbar: none;
						transition: left 0.3s linear;
					}

					.dashboard-logo {
						display: none;
					}

					.dashboard-items {
						height: 100%;
						align-items: center;
						justify-content: center;
						transform: translateY(-10px);
						padding: 0;
					}

					.dashboard-item {
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						margin: 0;
					}

					.dashboard-items-down {
						margin-top: 8rem;
						margin-bottom: 1rem;
					}
				}
			`}</style>
		</>
	);
};

export default DashboardSideBar;
