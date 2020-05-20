import Axios from "axios";

export const aXiOs = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{'API-KEY':'cb5f1a59-7c67-4a7f-8191-768910f74f3f'}
});

//validate
export const requirdField = val => !val ? 'Обязательное поле':undefined;
export const maxLength = (cnt) =>{
    return (val) => val && val.length>cnt ? `Максимальная длина ${cnt} символов`: undefined;
}

