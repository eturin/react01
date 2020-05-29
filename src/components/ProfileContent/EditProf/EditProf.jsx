import React, {useEffect, useState} from "react";
import css from './EditProf.module.css'
import {getProfile, sendProf} from "../../../redux/profileContentPageReducer";
import Loading from "../../Loading/Loading";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../UTILS/Control";


const EditProf = (props) =>{
    //предварительная загрузка профиля
    useEffect(()=>{
        if(props.id !== props.prof.id)
            props.getProfile(props.id);
    },[props.prof.id,props.id]);

    if(props.prof.loading)
        return <Loading />
    else
        return <EditProfReduxForm {...props} onSubmit={props.sendProf}/>;
}

const EditForm = (props) =>{
    const [disablaedDescription, f]=useState(true);
    if(disablaedDescription === props.form_lookingForAJob)
        f(!props.form_lookingForAJob);

    useEffect(()=>{
        f(!props.prof.lookingForAJob);
        props.initialize({
            userId                   : props.id,
            fullName                 : props.prof.fullName,
            AboutMe                  : props.prof.aboutme,
            lookingForAJob           : props.prof.lookingForAJob,
            lookingForAJobDescription: props.prof.lookingForAJobDescription,
            github                   : props.prof.contacts.github,
            vk                       : props.prof.contacts.vk,
            facebook                 : props.prof.contacts.facebook,
            instagram                : props.prof.contacts.instagram,
            twitter                  : props.prof.contacts.twitter,
            youtube                  : props.prof.contacts.youtube,
            website                  : props.prof.contacts.website
        });
    },[
        props.id,
        props.prof.fullName,
        props.prof.aboutme,
        props.prof.lookingForAJob,
        props.prof.lookingForAJobDescription,
        props.prof.contacts.github,
        props.prof.contacts.vk,
        props.prof.contacts.facebook,
        props.prof.contacts.instagram,
        props.prof.contacts.twitter,
        props.prof.contacts.youtube,
        props.prof.contacts.website
    ]);

    return (
        <div>
            <span className={ css.Title }>Редактирование профиля</span>
            <form onSubmit={props.handleSubmit}>
                <div className={ css.EditProf }>
                    <img className={ css.IMG } src={props.prof.img} />
                    <button disabled={props.sending} className={css.Button}>Сохранить</button>
                    <Field component={Input}
                           name='userId'
                           type='text'
                           hidden={true}/>
                    <div className={ css.Name }>
                        <Field component={Input}
                                  name='fullName'
                                  type='text'
                                  title='Полное имя'
                                  placeholder='Полное имя' />
                    </div>
                    <div className={ css.AboutMe }>
                        <Field component={Textarea}
                               name='AboutMe'
                               type='text'
                               title='Обо мне'
                               placeholder='Обо мне'/>
                    </div>
                    <div className={ css.Job}>
                        <div className={ css.LookingForAJob }>
                            <span>Описание работы
                                <Field component={Input}
                               name='lookingForAJob'
                               type='checkbox'
                               title='Ищу работу' /> </span>
                        </div>
                        <div className={ css.LookingForAJobDescription }>
                            <Field component={Textarea}
                                   name='lookingForAJobDescription'
                                   type='text'
                                   title='Описаниен работы'
                                   placeholder='Описание работы'
                                   disabled={ disablaedDescription }/>
                        </div>
                    </div>
                    <div className={ css.Contacts }>
                        <span>Контакты</span>
                        <div className={css.Github}>
                            <img className={css.Img} src='/github.png'     alt='github'    />
                            <Field component={Input}
                                   name='github'
                                   type='text'
                                   title='github'
                                   placeholder='github' />
                        </div>
                        <div className={css.Vk}>
                            <img className={css.Img} src='/vk.png'         alt='vk'        />
                            <Field component={Input}
                                   name='vk'
                                   type='text'
                                   title='vk'
                                   placeholder='vk' />
                        </div>
                        <div className={css.Facebook}>
                            <img className={css.Img} src='/facebook.png'   alt='facebook'  />
                            <Field component={Input}
                                   name='facebook'
                                   type='text'
                                   title='facebook'
                                   placeholder='facebook' />
                        </div>
                        <div className={css.Instagram}>
                            <img className={css.Img} src='/instagram.jfif' alt='instagram' />
                            <Field component={Input}
                                   name='instagram'
                                   type='text'
                                   title='instagram'
                                   placeholder='instagram' />
                        </div>
                        <div className={css.Twitter}>
                            <img className={css.Img} src='/twitter.png'    alt='twitter'   />
                            <Field component={Input}
                                   name='twitter'
                                   type='text'
                                   title='twitter'
                                   placeholder='twitter' />
                        </div>
                        <div className={css.Youtube}>
                            <img className={css.Img} src='/youtгbe.jfif'   alt='youtгbe'   />
                            <Field component={Input}
                                   name='youtube'
                                   type='text'
                                   title='youtube'
                                   placeholder='youtube' />
                        </div>
                        <div className={css.Website}>
                            <img className={css.Img} src='/www.png'        alt='www'       />
                            <Field component={Input}
                                   name='website'
                                   type='text'
                                   title='website'
                                   placeholder='website' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

const EditProfReduxForm = reduxForm({form: 'editProf'})(EditForm);
export default EditProf;