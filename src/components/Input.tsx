import React, {ChangeEvent, FC, useState} from 'react';
import {IUser} from "../types/types.people";

interface IInput {
    userParams: string | undefined;
    name: string;
    read: boolean;
    setUser: any;
    user: IUser | null;
    setIsError: any;
}

const Input: FC<IInput> = ({user, userParams, read, name, setUser, setIsError}) => {
    const [valueUser, setValueUser] = useState(userParams)
    const [isValid, setIsValid] = useState(true)

    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValueUser(e.target.value)
        if (e.target.value === '' || !e.target.value) {
            setIsValid(false)
            return setIsError(true)
        }
        if (name === 'Name') setUser({...user, name: e.target.value})
        if (name === 'Username') setUser({...user, username: e.target.value})
        if (name === 'E-mail') setUser({...user, email: e.target.value})
        if (name === 'Street') setUser({...user, address: {street: e.target.value}})
        if (name === 'City') setUser({...user, address: {city: e.target.value}})
        if (name === 'Zip code') setUser({...user, address: {zipcode: e.target.value}})
        if (name === 'Phone') setUser({...user, phone: e.target.value})
        if (name === 'Website') setUser({...user, website: e.target.value})
        setIsError(false)
        setIsValid(true)
    }

    return (
        <>
            <label htmlFor={userParams}>{name}</label>
            <input
                readOnly={read}
                className={isValid ? 'form__input' : 'form__input error'}
                name={userParams}
                value={valueUser}
                onChange={HandleChange}
                type="text"
            />
        </>
    );
};

export default Input;