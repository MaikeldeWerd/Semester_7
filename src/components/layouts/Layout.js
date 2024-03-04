const Layout = ({children}) => {
    return(
        <div className={'flex flex-col h-screen'}>
            <header className={'bg-blue-500 p-10'}>
                Semester 7
            </header>

            <main className={'bg-orange-500 h-full'}>
                {children}
            </main>

            <footer className={'bg-purple-700 p-10'}>

            </footer>
        </div>
    );
};

export default Layout;