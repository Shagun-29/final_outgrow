import { Injectable } from '@angular/core';

@Injectable()
export class IdeaGenService {

  constructor() {  
  }
  

  callGoogleSheet(link):any{
    fetch(link).then((res)=>{
      console.log(res.json())
      return res.json();
    }).catch((err)=>{
      console.log(err);
      return err;
    })
  }
  
}
