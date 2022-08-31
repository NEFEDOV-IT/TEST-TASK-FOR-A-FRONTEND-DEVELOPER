import React, {FC} from 'react';
import './Loader.scss'

const Loader: FC = () => {
    return (
        <div className={'loader'}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    );
};

export default Loader;