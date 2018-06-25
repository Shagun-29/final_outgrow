import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IdeaGenService {

  constructor() {  
  }
  callGoogleSheet(link): Promise<any>{
    console.log("saaaaaaaaaaaa",link)
   return fetch(link)
    .then((res:any)=>{
      // console.log("1",res.json())
      return res.json();
    })
    .catch((err)=>{
      console.log(err); 
    })
  }
  
}
