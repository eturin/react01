export const getAva  = (state) => state.ava;
export const setText = (state,text) => { state.text = text; };
export const getText = (state)  => state.text;

export const SET_TEXT='setText';
export const F_ADD   ='fAdd';
export const PROFILE_CONTENT='ProfileContent';
export const DIALOGS ='Dialogs';

export const set_text = (text, from=PROFILE_CONTENT) => ({ type: SET_TEXT, from:from, text:text });
export const f_add    = (from=PROFILE_CONTENT)       => ({ type: F_ADD   , from:from            });
