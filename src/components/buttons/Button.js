import {twMerge} from "tailwind-merge";

const Button = ({children, className, ...properties}) => {
    return(
        <div className={twMerge('px-4 py-2 flex justify-between w-fit gap-2 rounded-lg bg-purple-700 text-white items-center', className)} {...properties}>
            {children}
        </div>
    );
};

export default Button;