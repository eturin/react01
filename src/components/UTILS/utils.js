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

export const getImg            =(state, id)=> state.DialogsPage.Dialogs.find(x=>x.id===id).img;
export const getImgMy          =(state)    => state.ProfileContentPage.img;
export const getLoadingMessages=(state)    => state.DialogsPage.loadingMessages;
export const getStateMessages  =(state)    => state.DialogsPage.Messages.sort((a,b)=> a.addedAt-b.addedAt);
export const getSending        =(state)    => state.DialogsPage.sending;
export const getLoadingDialogs =(state)    => state.DialogsPage.loading;
export const getStateDialogs   =(state)    => state.DialogsPage.Dialogs.sort((a,b)=> a.lastDialogActivityDate-b.lastDialogActivityDate);
export const getUserByID       =(state, id)=> state.FindUserPage.mUsers.find(x => x.id===id);
export const getPage           =(state)    => state.FindUserPage.Page;
export const getTotalPage      =(state)    => state.FindUserPage.totalPage;
export const getCountItem      =(state)    => state.FindUserPage.count;
export const getUsers          =(state)    => state.FindUserPage.mUsers;
export const getMyID           =(state)    => state.Auth.data.id;
export const getMyLogin        =(state)    => state.Auth.data.login;
export const getCaptcha        =(state)    => state.Auth.captcha;
export const getUrlToBack      =(state)    => state.App.url_to_go_back_after_redirect;
