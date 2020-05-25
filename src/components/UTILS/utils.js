import Axios from "axios";
import {createSelector} from "reselect";



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

//selectors
export const getSending        =(state)       => state.DialogsPage.sending;
export const getLoadingDialogs =(state)       => state.DialogsPage.loading;
export const getImgMy          =(state)       => state.ProfileContentPage.img;
export const getLoadingMessages=(state)       => state.DialogsPage.loadingMessages;
export const getPage           =(state)       => state.FindUserPage.Page;
export const getTotalPage      =(state)       => state.FindUserPage.totalPage;
export const getCountItem      =(state)       => state.FindUserPage.count;
export const getMyID           =(state)       => state.Auth.data.id;
export const getMyLogin        =(state)       => state.Auth.data.login;
export const getCaptcha        =(state)       => state.Auth.captcha;
export const getUrlToBack      =(state)       => state.App.url_to_go_back_after_redirect;
export const getFriends        =(state)       => state.NavBar.FriendsPage.mFriends;
export const getInitedApp      =(state)       => state.App.isInitApp;
export const getIDforDilog     =(state)       => state.ProfileContentPage.id;
export const getValueForDilog  =(state,source)=> state.ProfileContentPage[source];
export const getProf           =(state)       => state.ProfileContentPage;

//reselectors
const _passVal           =(state,val)=> val;
const _getStateDialogs   =(state)    => state.DialogsPage.Dialogs;
export const getImg = createSelector(
    [_getStateDialogs,_passVal],
    (Dialogs, id)=> {
                    return Dialogs.find(x=>x.id===id).img;
            }
)
export const getUserNameForDialog = createSelector(
    [_getStateDialogs,_passVal],
    (Dialogs,id) =>{
                    return  Dialogs.find(x=>x.id===id).userName;
            }
)
export const getStateDialogs   = createSelector(
    [_getStateDialogs],
    (Dialogs)    => {
                    return Dialogs.sort((a,b)=> a.lastDialogActivityDate-b.lastDialogActivityDate);
            }
)

const _getStateMessages        =(state)    => ({id: state.DialogsPage.id, Messages: state.DialogsPage.Messages});
export const getStateMessages = createSelector(
    [_getStateMessages, _passVal],
    (obj, id) => {

                    return obj.id === parseInt(id) ? obj.Messages.sort((a,b)=> a.addedAt-b.addedAt) : [];
            }
)

export const getUsers          =(state)       => state.FindUserPage.mUsers;
export const getUserByID       = createSelector(
    [getUsers,_passVal],
    (Users,id) => {
                    return Users.find(x => x.id===id);
             }
)



