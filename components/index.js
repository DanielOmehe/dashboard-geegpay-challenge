const DashboardHeader =({children})=>{
    return(
        <>
        <header className="dashboard-header">{children}</header>
        <style jsx>{`
            .dashboard-header{
                width: 100%;
                height: 100vh;
            }
        `}</style>
        </>
    )
}

export default DashboardHeader