import { Injectable } from '@angular/core';

@Injectable()
export class IdeaGenService {

  constructor() {  
  }
  

  callGoogleSheet(link):any{
    fetch(link).then((res)=>{
      return res.json();
    }).catch((err)=>{
      return err;
    })
  }
  
}
