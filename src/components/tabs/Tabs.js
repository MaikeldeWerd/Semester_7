import {twMerge} from "tailwind-merge";

const Tabs = ({ className, children, ...properties}) => {
    return(
        <div className={twMerge('', className)} {...properties}>
            {children}
        </div>
    )
}

Tabs.Tab = ({ className, children, ...properties}) => {
    return(
        <div className={twMerge('', className)} {...properties}>
            <p>{children}</p>
        </div>
    )
}