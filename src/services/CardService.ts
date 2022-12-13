import {Card} from "../CardPreview";
import {Dispatch, SetStateAction} from "react";

export function getCards() {
   return fetch('/api/card')
        .then(res => res.json())
}