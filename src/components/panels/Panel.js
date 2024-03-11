import { twMerge } from 'tailwind-merge';

const Panel = ({children, className, ...properties}) => {
    return(
        <div className={twMerge('rounded-lg bg-gray-500 p-6 flex flex-col gap-6 justify-between items-center', className)} {...properties}>
            {children}
        </div>
    );
};

export default Panel;