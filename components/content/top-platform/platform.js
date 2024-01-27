const TopPlatform = ({ progress_color, progress, platform, rate, income }) => {
	return (
		<>
			<div className="top-platform">
				<h3>{platform}</h3>
				<div className="progress-container">
					<div className="progress"></div>
				</div>
				<div className="top-platform-footer">
					<p>${income}</p>
					<p>+{rate}%</p>
				</div>
			</div>
            <style jsx>{`
            .top-platform{
                width: 100%;
                margin: 1.2rem 0;
            }

            .progress-container{
                width: 100%;
                background: var(--progress-secondary);
                height: .8rem;
                border-radius: 50px;
                margin: 1rem 0;
            }

            .progress{
                width: ${progress}%;
                height: 100%;
                border-radius: 50px;
                background: ${progress_color};
            }

            .top-platform-footer{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            `}</style>
		</>
	);
};

export default TopPlatform;
