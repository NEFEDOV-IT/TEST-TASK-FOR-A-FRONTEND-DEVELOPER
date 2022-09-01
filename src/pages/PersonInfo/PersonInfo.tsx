import React, {FC, FormEvent, useEffect, useState} from 'react';
import {IUser} from "../../types/types.people";
import axios from "axios";
import {URL} from "../../utils";
import {useNavigate, useParams} from "react-router-dom";
import './PersonInfo.scss'
import Input from "../../components/Input";
import Button from "../../components/Button";
import Loader from "../../components/Loader/Loader";

const PersonInfo: FC = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [user, setUser] = useState<IUser | null>(null)
  const [area, setArea] = useState<string>(localStorage.getItem('comment' + params.id) || '')
  const [read, setRead] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true)

    async function getUser() {
      try {
        const response = await axios.get<IUser>(URL + params.id)
        setUser(response.data)
      } catch (e) {
        console.log(e)
      }
    }

    getUser().then(() => setIsLoading(false))
  }, [params.id])

  const ChangeRead = () => {
    setRead(!read)
  }

  const fetchToJson = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isError) return
    if (user) {
      user.comment = area
    }
    if (!read) {
      localStorage.setItem('comment' + params.id, area)
      const data = JSON.stringify(user)
      console.log(data)
      navigate('/')
    }
  }

  return (
    <div className={'person'}>
      <div className="person__body">
        <div className="person__title">Профиль пользователя</div>
        {isLoading ||
          <Button
            classButton={'person__button'}
            onClick={ChangeRead}
          >
            Редактировать
          </Button>}
      </div>
      {isLoading ? <Loader/> :
        <form onSubmit={fetchToJson} className="person__form">
          <Input setIsError={setIsError} name={'Name'} user={user} setUser={setUser}
                 userParams={user?.name} read={read}/>
          <Input setIsError={setIsError} name={'Username'} user={user} setUser={setUser}
                 userParams={user?.username} read={read}/>
          <Input setIsError={setIsError} name={'E-mail'} user={user} setUser={setUser}
                 userParams={user?.email} read={read}/>
          <Input setIsError={setIsError} name={'Street'} user={user} setUser={setUser}
                 userParams={user?.address.street} read={read}/>
          <Input setIsError={setIsError} name={'City'} user={user} setUser={setUser}
                 userParams={user?.address.city} read={read}/>
          <Input setIsError={setIsError} name={'Zip code'} user={user} setUser={setUser}
                 userParams={user?.address.zipcode} read={read}/>
          <Input setIsError={setIsError} name={'Phone'} user={user} setUser={setUser}
                 userParams={user?.phone} read={read}/>
          <Input setIsError={setIsError} name={'Website'} user={user} setUser={setUser}
                 userParams={user?.website} read={read}/>
          <label htmlFor="comment">Comment</label>
          <textarea value={area} onChange={(e) => setArea(e.target.value)} name="comment"></textarea>
          <Button classButton={read ? 'form__input-button' : 'form__input-button active'}>Отправить</Button>
        </form>}
      {isLoading ||
        <Button
          classButton={'form__input-button-back'}
          onClick={() => navigate('/')}>
          Назад
        </Button>}
    </div>
  );
};

export default PersonInfo;