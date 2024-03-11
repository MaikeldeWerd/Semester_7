import {twMerge} from "tailwind-merge";

const Tabs = ({ className, children, ...properties}) => {
    return(
        <div className={twMerge('flex gap-10 w-fit overflow-auto', className)} {...properties}>
            {children}
        </div>
    );
};

Tabs.Tab = ({ className, active, children, ...properties}) => {
    return(
        <div className={twMerge(`text-lg py-2 ${active ? 'border-orange-500 border-b-2' : 'border-none'}`, className)} {...properties}>
            <div className={'font-semibold px-6 cursor-pointer'}>{children}</div>
        </div>
    );
};

export default Tabs;