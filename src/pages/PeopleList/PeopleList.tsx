import React, {FC, useEffect, useState} from 'react';
import './PeopleList.scss'
import PeopleItem from "./PeopleItem";
import {IUser} from "../../types/types.people";
import List from "../../components/List";
import axios from "axios";
import {URL} from "../../utils";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addPeopleData} from "../../store/people.slice";
import Loader from "../../components/Loader/Loader";

const PeopleList: FC = () => {
    const users = useSelector<IUser[]>(state => state)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        setIsLoading(true)
        setTimeout(async function () {
            try {
                const response = await axios.get<IUser[]>(URL)
                dispatch(addPeopleData(response.data))
                setIsLoading(false)
                if (isError) setIsError(false)
            } catch (e) {
                setIsError(true)
                setIsLoading(false)
                console.log(e)
            }
        }, 500)
    }, [])

    return (
        <div className="people">
            <div className="people__title">Список пользователей</div>
            {isError && <p>Error page. Not found people.</p>}
            <div className="people__list">
                {isLoading ? <Loader/> :
                    <List items={users}
                          renderItem={(user: IUser) =>
                              <PeopleItem onClick={(user) =>
                                  navigate('person/' + user.id)}
                                          user={user}
                                          key={user.id}
                              />}
                    />
                }
                {isLoading ||
                  <div className="people__total">{`Найдено ${(users as IUser[]).length} пользователей`}</div>}
            </div>
        </div>
    );
};

export default PeopleList;