import {twMerge} from "tailwind-merge";
import Panel from "../panels/Panel";
import Container from "./Container";
import Link from "next/link";
import Button from "@/components/buttons/Button";

const Layout = ({children, className, ...properties}) => {
    const date = new Date();
    const fullYear = date.getFullYear();

    return (
        <div className={twMerge('flex flex-col h-screen bg-black', className)} {...properties}>
            <header className={'p-10'}>
                <Panel>
                    <div className={'grid grid-cols-3 gap-10 items-center w-full'}>
                        <p className={'text-2xl font-semibold'}>
                            Portfolio Maikel de Werd
                        </p>

                        <nav>
                            <div className={'flex gap-6 justify-center'}>
                                <Link href={"/"}>Home</Link>

                                <Link href={"Projects"}>Projects</Link>

                                <Link href={"LearningOutcomes"}>Learning outcomes</Link>
                            </div>
                        </nav>

                        <div className={'flex justify-end'}>
                            <Link href={'https://drive.google.com/drive/folders/1XWfhaDkIdvxGdS6dpUzv0kzuHTd4WS2K?usp=share_link'} target={'_blank'}>
                                <Button>
                                    <span>
                                        View documents
                                    </span>
                                </Button>
                            </Link>

                        </div>
                    </div>
                </Panel>

            </header>

            <main className={'h-full'}>
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