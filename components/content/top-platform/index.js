import { useDashboardContext } from "../../context";
import TopPlatform from "./platform";

const TopPlatforms = () => {
	const { platforms } = useDashboardContext();
	return (
		<>
			<section className="top-platforms">
				<div className="top-platforms-header">
					<h3>Top Platform</h3>
					<p>See All</p>
				</div>
				<div className="top-platforms-container">
                {
                    platforms.map(({progress_color, progress, platform, rate, income}, indx) => (
                        <TopPlatform
						progress_color={progress_color}
						progress={progress}
						platform={platform}
						income={income}
						rate={rate}
					/>
                    ))
                }
				</div>
			</section>
			<style jsx>{`
				.top-platforms {
					width: 40.7rem;
					height: fit-content;
                    margin-bottom: 3rem;
					background: var(--bg-secondary);
					padding: 1rem;
					border-radius: 1rem;
                    box-shadow: 0 0 1px var(--secondary);
                    color: var(--text-primary);
                    margin: .8rem 0 0 .8rem;
				}

				.top-platforms-header {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 1rem;
				}

                p{
                    color: var(--success);
                }

				.top-platforms-container {
					width: 100%;
					height: fit-content;
                    margin-top: 1.2rem;
				}

                @media only screen and (max-width: 1500px){
                    .top-platforms {
                        margin-top: .8rem;
                        width: 40%;
                        margin-bottom: 3rem;
                    }
                }

                @media only screen and (max-width: 1200px){
                    .top-platforms {
                        margin-top: .8rem;
                        width: 100%;
                        margin-bottom: 3rem;
                    }
                }

                @media only screen and (max-width: 912px){
                    .top-platforms {
                        margin: 0;
                        width: 100%;
                        margin-bottom: 3rem;
                    }
                }
			`}</style>
		</>
	);
};

export default TopPlatforms;
