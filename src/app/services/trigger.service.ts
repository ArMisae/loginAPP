import { Injectable } from '@angular/core';

import { Triggers } from '../models/Triggers';

@Injectable({
  providedIn: 'root'
})
export class TriggerService {

  triggers: Triggers[];

  constructor() {
    this.triggers=[
    //   table:'tblClientes', column: 'id', type:'INT', number:''
    ];
   }

   getTriggers(){
     if(localStorage.getItem('atributos') == null){
      return this.triggers;
     }else{
       this.triggers= JSON.parse(localStorage.getItem('atributos'));
       return this.triggers;
     }
  }

  addTrigger(Trigger: Triggers){

    this.triggers.push(Trigger);
    let triggers: Triggers[] = [];

    if(localStorage.getItem('atributos') == null){
      triggers.push(Trigger);
      localStorage.setItem('atributos', JSON.stringify(triggers));
    }else{
      triggers = JSON.parse(localStorage.getItem('atributos'));
      triggers.push(Trigger);
      localStorage.setItem('atributos', JSON.stringify(triggers));
    }


    
  }

  deleteTrigger(Trigger: Triggers){
    for (let i = 0; i < this.triggers.length; i++) {
      if(Trigger == this.triggers[i]){

        this.triggers.splice(i,1);
        localStorage.setItem('atributos', JSON.stringify(this.triggers));
          
      }
      
    }
  }

}
