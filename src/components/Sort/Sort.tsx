import React from 'react';
import './Sort.scss'
import {useDispatch} from "react-redux";
import {sortPeopleData} from "../../store/people.slice";

const ButtonGroup = ({children}: any) =>
    <div className="button-group">{children}</div>;

const Sort = () => {
    const dispatch = useDispatch()
    return (
        <div className={'sort'}>
            <div className="sort__title">Сортировка</div>
            <ButtonGroup>
                <button onClick={() => dispatch(sortPeopleData(1))}>По городу</button><br/>
                <button onClick={() => dispatch(sortPeopleData(2))}>По компаниям</button>
            </ButtonGroup>
        </div>
    );
};

export default Sort;