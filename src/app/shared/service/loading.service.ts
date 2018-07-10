import { Injectable, Output } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject,BehaviorSubject } from 'rxjs';
@Injectable()
export class LoadingService {
    
    constructor() { }
  
    
// isLoading(){
    isLoading = new BehaviorSubject<boolean>(true);
// }
}

