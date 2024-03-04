import {twMerge} from "tailwind-merge";
import Panel from "../panels/Panel";
import Button from "../buttons/Button";
import Container from "./Container";

const Layout = ({children, className, ...properties}) => {
    const date = new Date();
    const fullYear = date.getFullYear();

    return(
        <div className={twMerge('flex flex-col h-screen bg-black', className)} {...properties}>
            <header className={'p-10'}>
                <Panel>
                    <div className={'grid grid-cols-3 gap-10 items-center w-full'}>
                        <p className={'text-2xl font-semibold'}>
                            Portfolio Maikel de Werd
                        </p>

                        <nav>
                            <ul className={'flex gap-6 justify-center'}>
                                <li>
                                    <a href={"../../pages/Home"}>Home</a>
                                </li>

                                <li>
                                    <a href={"../../pages/LO"}>Learning outcomes</a>
                                </li>
                            </ul>
                        </nav>

                        <div className={'flex justify-end'}>
                            <Button>
                        <span>
                            View documents
                        </span>
                            </Button>
                        </div>
                    </div>
                </Panel>

            </header>

            <main className={'bg-orange-500 h-full'}>
                {children}
            </main>

            <footer className={'py-4'}>
                <Container className={'flex-row justify-between'}>
                    <p className={'text-gray-500'}>Copyright &copy; {fullYear}</p>

                    <p className={'text-gray-500'}>
                        Produced by Maikel de Werd
                    </p>
                </Container>
            </footer>
        </div>
    );
};

export default Layout;