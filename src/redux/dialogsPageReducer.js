import {aXiOs, getProf, getState} from "../components/UTILS/utils";
import {getProfile} from "./profileContentPageReducer";

export const SET_LOADING_DIALOGS = 'SetLoadingDialogs';
export const SET_DIALOGS         = 'SetDialogs';
export const SET_LOADING_MESSAGES= 'SetLoadingMessages';
export const SET_MESSAGES        = 'SetMessages';
export const SET_SENDING         = 'SetSending';
export const ADD_TO_DILOGS       = 'AddToDilogs';

let initState =  {
    loading: false,
    Dialogs: [
       /*{
            id: 7397,
            img: undefined,
            userName: "folent",
            hasNewMessages: true,
            lastDialogActivityDate: "2020-05-12T18:36:19.05",
            lastUserActivityDate: "2020-05-18T09:02:41.247",
            newMessagesCount: 2,
            photos: {
              "small": "https://social-network.samuraijs.com/activecontent/images/users/7397/user-small.jpg?v=1",
              "large": "https://social-network.samuraijs.com/activecontent/images/users/7397/user.jpg?v=1"
         }*/
    ],
    loadingMessages: false,
    Messages: [
        /*id: "45612b96-7686-4f1b-a75f-f59871dc38cb",
          body: "asdadas",
          translatedBody: null,
          addedAt: "2020-05-12T17:11:21.133",
          senderId: 7397,
          senderName: "folent",
          recipientId: 8010,
          viewed: false*/
    ],
    sending: false,
    id: undefined
};



const dialogsPageReducer = (state = initState, action) =>{
    let stateCopy =state;
    switch (action.type) {
        case SET_LOADING_DIALOGS:
            stateCopy={
                loading : true,
                Dialogs : [],
                loadingMessages: false,
                Messages: [],
                id: undefined
            };
            break;
        case SET_DIALOGS:
            stateCopy={
                loading: false,
                Dialogs: action.data.map(x => ({
                    ...x,
                    img: x.photos.large ? x.photos.large : x.photos.small
                })),
                loadingMessages: false,
                Messages: [],
                id: undefined
            };
            break;
        case SET_LOADING_MESSAGES:
            stateCopy={
                ...state,
                loadingMessages: true,
                Messages: [],
                id: action.id
            };
            break;
        case SET_MESSAGES:
            if(action.id===state.id)
                stateCopy={
                    ...state,
                    loadingMessages: false,
                    Messages: [...action.data]
            };
            break;
        case SET_SENDING:
            if(action.idDilog===state.id)
                stateCopy={
                    ...state,
                    sending: !state.sending
                };
            break;
        case ADD_TO_DILOGS:
            if(state.Dialogs.find(x => x.id === action.id) === undefined)
                stateCopy={
                    ...state,
                    Dialogs: [
                        ...state.Dialogs,
                        {
                            id: action.id,
                            img: action.img,
                            userName: action.userName
                        }
                        ]
                };
            break;
    }

    return stateCopy;
}

export default dialogsPageReducer;

//action creaters
export const setLoadingDialogs = () => ({type: SET_LOADING_DIALOGS})
export const setDialogs        = (data)=>({type: SET_DIALOGS, data: data})
export const setLoadingMessages= (id) => ({type: SET_LOADING_MESSAGES, id:id})
export const setMessages       = (id,data)=>({type: SET_MESSAGES, id: id ,data: data})
export const setSending        = (idDilog)=>({type: SET_SENDING, idDilog:idDilog})
export const addToMyDilogs     = (id, img, userName) => ({type: ADD_TO_DILOGS, id:id, img:img, userName:userName});

//thunk creaters
export const addToDilogs =(id)=>{
    return (dispatch) => {
        aXiOs.get(`profile/${id}`)
            .then(resp=>{
                dispatch(addToMyDilogs(
                    id,
                    (resp.data.photos.large!=null ? resp.data.photos.large: resp.data.photos.small),
                    resp.data.fullName));
            })
            .catch(error => {
                try {
                    alert("ERR: get profile (" + id + ") for dialog: " + error.response.data.message)
                } catch (e) {
                    alert("ERR: get profile (" + id + ")  for dialog!")
                }
            });
    }
}

export const getDialogs =()=>{
    return (dispatch) =>{
        dispatch(setLoadingDialogs());
        aXiOs.get(`dialogs`)
             .then(resp=>{
                dispatch(setDialogs(resp.data));
             })
            .catch(error => {
                try {
                    alert("ERR: get dialogs: " + error.response.data.message)
                } catch (e) {
                    alert("ERR: get dialogs!")
                }
            });
    }
}
export const getMessages =(id) =>{
    return (dispatch) => {
        dispatch(setLoadingMessages(id));
        aXiOs.get(`dialogs/${id}/messages`)
            .then(resp => {
                if(resp.data.error === null)
                    dispatch(setMessages(id,resp.data.items))
                else
                    alert(resp.data.error)
            })
            .catch(error => {
                try {
                    alert("ERR: get messages: " + error.response.data.error)
                } catch (e) {
                    alert("ERR: get messages!")
                }
            });
    }
}
export const sendNewMessage = (form) =>{
    return (dispatch) =>{
        dispatch(setSending(form.idDilog));
        aXiOs.post(`dialogs/${form.idDilog}/messages`,{body:form.body})
            .then(resp => {
                dispatch(setSending(form.idDilog));
                getMessages(form.idDilog)(dispatch);
            })
            .catch(error => {
                try {
                    alert("ERR: send message: " + error.response.data.error)
                } catch (e) {
                    alert("ERR: send message!")
                }
            });
    }
}