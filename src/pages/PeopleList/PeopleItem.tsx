import React, {FC} from 'react';
import {IUser} from "../../types/types.people";

interface PeopleItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const PeopleItem: FC<PeopleItemProps> = ({user, onClick}) => {
    return (
        <li className={'people__list-li'} key={user.id}>
            <div className="li-name">
                <span>ФИО: </span>
                {user.name}
            </div>
            <div className="li-city">
                <span>Город: </span>
                {user.address.city}
            </div>
            <div className="li-company-name">
                <span>Компания: </span>
                {user.company.name}
            </div>
            <button onClick={() => onClick(user)}>Подробнее</button>
        </li>
    );
};

export default PeopleItem;