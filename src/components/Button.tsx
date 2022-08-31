import React, {FC} from 'react';

interface IButton {
    classButton: string;
    onClick?: () => void;
    children: string;
}

const Button: FC<IButton> = ({classButton, onClick, children}) => {
    return (
        <button
            className={classButton}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;