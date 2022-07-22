import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class LanguagesService{
    constructor(private http: HttpClient) {

    }
    getLanguages(){
        return this.http.get<any>("http://localhost:3000/lenguages");
    }
}