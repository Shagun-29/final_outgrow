import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
const SECRET = 'ghO/I-uYjYTM[>n7hQ;a|nJl&`/*-ut[uQ-wR33G#Dk$X}Me&g3tg~0_*.7WIK~M'

@Injectable()
export class CookieService {
    createCookie(name: string, value: string, days: number) {
        value = (name == 'storage' && value != '' ? this.spliceCookie(JSON.parse(value)) : value);
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
    }

    spliceCookie(storage) {
        storage.user ? storage.user.location = '' : '';
        storage.company ? storage.company.name = '' : '';

        return JSON.stringify(storage);
    }

    readCookie(name: string) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    eraseCookie(name: string) {
        this.createCookie(name, "", -1);
    }


}
