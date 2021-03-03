import {Header} from '../comps/header';
import {SubHeader} from '../comps/subheader';

import {BackNextButton} from '../comps/BackNextButton';
import {TextBubble} from '../comps/TextBubble';


//Arielle
import {ButtonUI} from '../accomps/button';
import {TabUI} from '../accomps/tab';
import {TrashCan} from '../accomps/trash-can';
import {FooterUI} from '../accomps/footer';


export default {
    title: "My Components"
}


export const MyHeader = () => Header;
export const MySubHeader = () => SubHeader;


export const MyBackNextButton = () => BackNextButton;
export const MyTextBubble = () => TextBubble;

//Arielle
export const MyButtonUI = () => ButtonUI;
export const MyTabUI = () => TabUI;
export const MyTrashCan = () => TrashCan;
export const MyFooterUI = () => FooterUI;

//Michael
import {textBubbleLight} from '../comps/textBubbleLight';
export const TextBubbleTemplate = () => textBubbleLight;

