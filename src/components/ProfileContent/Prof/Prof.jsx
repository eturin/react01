import React from "react";
import css from './Prof.module.css';

class Prof extends React.Component {
    componentDidMount() {
        let id=this.props.match.params.id;
        if(id==undefined) id=2;
        this.props.getProfile(id);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        let id=this.props.match.params.id;
        if(id==undefined) id=2;
        if(prevProps!=null && this.props.match.params.id!=prevProps.match.params.id)
            this.props.getProfile(id);
    }

    render() {
        if(this.props.loading)
            return <p className={css.Loading}><img className={css.ImgBack} src='/loading.gif'/></p>;
        else{
            let mJSX = [];
            if (this.props.github != null)    mJSX.push(<div key={0} className={css.Github}>   <a href={this.props.github}    target='_blank'><img className={css.Img} src='/github.png'/>    </a></div>);
            if (this.props.vk != null)        mJSX.push(<div key={1} className={css.Vk}>       <a href={this.props.vk}        target='_blank'><img className={css.Img} src='/vk.png'/>        </a></div>);
            if (this.props.facebook != null)  mJSX.push(<div key={2} className={css.DFacebook}><a href={this.props.facebook}  target='_blank'><img className={css.Img} src='/facebook.png'/>  </a></div>);
            if (this.props.instagram != null) mJSX.push(<div key={3} className={css.Instagram}><a href={this.props.instagram} target='_blank'><img className={css.Img} src='/instagram.jfif'/></a></div>);
            if (this.props.twitter != null)   mJSX.push(<div key={4} className={css.Twitter}>  <a href={this.props.twitter}   target='_blank'><img className={css.Img} src='/twitter.png'/>   </a></div>);
            if (this.props.youtube != null)   mJSX.push(<div key={5} className={css.Youtube}>  <a href={this.props.youtube}   target='_blank'><img className={css.Img} src='/youtгbe.jfif'/>  </a></div>);
            if (this.props.website != null)   mJSX.push(<div key={6} className={css.Website}>  <a href={this.props.website}   target='_blank'><img className={css.Img} src='/www.png'/>       </a></div>);

            return (
                <div className={css.Prof}>
                    <div className={css.Avatar}><img className={css.AvatarImg} src={this.props.large}/>
                        <div className={css.Contacts}>
                            {mJSX}
                        </div>
                    </div>

                    <div className={css.Name}>{this.props.fullName}</div>
                    <div className={css.Status}><b>Обо мне: </b>{this.props.status}</div>

                    <div className={css.DJob}>Предпрочтения:</div>
                    <div
                        className={this.props.lookingForAJob ? css.ActiveLookingForAJobDescription : css.LookingForAJobDescription}>{this.props.lookingForAJobDescription}</div>
                </div>
            );
        }
    }
}

export default Prof;