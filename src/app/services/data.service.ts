import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  consentRead:boolean=false;
   constructor() { }

   getConsentRead(){
    return this.consentRead;
   }

   setConsentRead(read:boolean){
    this.consentRead=read;
   }

}
