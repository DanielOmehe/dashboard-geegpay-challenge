import { useDashboardContext } from './context';

const DashboardHeader =({children})=>{
    const { currentTheme } = useDashboardContext();
    return(
        <>
        <header className={`dashboard-header ${currentTheme}`}>{children}</header>
        <style jsx>{`
            .dashboard-header{
                width: 100%;
                color: var(--text-primary);
            }
        `}</style>
        </>
    )
}

export default DashboardHeader