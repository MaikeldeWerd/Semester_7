import {twMerge} from "tailwind-merge";

const Container = ({children, className, ...properties}) => {
    return(
        <div className={twMerge('px-10 w-full m-auto flex gap-10 flex-col', className)} {...properties}>
            {children}
        </div>
    );
};

export default Container;