import { textBubbleLight } from "../comps/textBubbleLight";
import { textBubbleDark } from "../comps/textBubbleDark";

document.querySelector(".textBubbleLight").innerHTML += textBubbleLight("Discarding food could be either throwing it away, or leaving the food to spoil", "2Discarding food could be either throwing it away, or leaving the food to spoil");

document.querySelector(".textBubbleDark").innerHTML += textBubbleDark();