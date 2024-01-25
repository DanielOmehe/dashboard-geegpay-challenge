import Image from "next/image";
import { useDashboardContext } from "../context";

const DashboardSideBar = () => {
    const { currentTheme, toggleTheme } = useDashboardContext();
	return (
		<>
			<aside className="dashboard-sidebar">
				<div className="dashboard-logo">
					<Image src={"/icons/logo.svg"} alt="Logo" width={40} height={40} />
				</div>
				<ul className="dashboard-items">
					<li className="dashboard-item">
						<Image
							src={"/icons/category.svg"}
							alt="category"
							width={25}
							height={25}
						/>
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
					<div className={currentTheme === 'light' ? "current-theme" : ""}>
						<Image src={"/icons/sun.svg"} alt="sun" width={20} height={20} />
					</div>
					<div className={currentTheme === 'dark' ? "current-theme" : ""}>
						<Image src={"/icons/moon.svg"} alt="sun" width={20} height={20} />
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
				}

                .current-theme{
                    background: #34caa5;
                    width: 28px;
                    height: 28px;
                    display: flex;
                    alifn-items: center;
                    justify-content: center;
                    padding: .2rem;
                    border-radius: 50px;
                }

                .current-theme img{
                    fill: #fff;
                }

				.dashboard-item {
					list-style: none;
				}

				.dashboard-theme-switcher {
					display: flex;
					align-item: center;
					justify-content: center;
					gap: 1rem;
                    flex-direction: column;
                    background: #fff;
                    padding: .25rem;
                    margin-top: 1rem;
                    border-radius: 50px;
				}

                .dashboard-items-down{
                    margin-top: 1.2rem;
					display: flex;
					flex-direction: column;
					gap: 1rem;
                    margin-top: 10rem;
                }
			`}</style>
		</>
	);
};

export default DashboardSideBar