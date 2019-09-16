import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { TriggerService } from '../../services/trigger.service';
import { Triggers } from '../../models/Triggers';

@Component({
  selector: 'app-createtriggers',
  templateUrl: './createtriggers.component.html',
  styleUrls: ['./createtriggers.component.scss']
})
export class CreatetriggersComponent implements OnInit {

  triggers: Triggers[];
  
  colum: Triggers[];
  descripcion: string;

  constructor(
    public triggerService: TriggerService 
  ) { }

  ngOnInit() {

    this.triggers = this.triggerService.getTriggers();
    

  }

  addColumns(newTable: HTMLInputElement, newColumn: HTMLInputElement, newType: HTMLInputElement, newNumber: HTMLInputElement){
    this.triggerService.addTrigger({
      table:newTable.value, column: newColumn.value, type: newType.value, number: newNumber.value
    });
    newColumn.value='';
    newType.value='';
    newNumber.value='';
    newColumn.focus();
    return false;
  }

  Generar(){
    let colum: Array<any> = [];
    let colum2: Array<any> = [];
    let colum3: Array<any> = [];
    for (let i = 0; i < this.triggers.length; i++) {
       colum.push('@'+this.triggers[i].column+'Nuevo AS '+this.triggers[i].type+'('+this.triggers[i].number+')\n'+',@'+this.triggers[i].column+'Anterior AS '+this.triggers[i].type+'('+this.triggers[i].number+')\n');
    }
    for (let i = 0; i < this.triggers.length; i++) {
      colum2.push('@'+this.triggers[i].column+'Nuevo = '+this.triggers[i].column);
    }
   for (let i = 0; i < this.triggers.length; i++) {
    colum3.push('@'+this.triggers[i].column+'Anterior = '+this.triggers[i].column);
    }
    this.descripcion =  'CREATE TRIGGER tr_UpdAuditoria ON ' + this.triggers[0].table+ ' AFTER UPDATE\n'
                          + 'AS\n'
                          + 'DECLARE '+colum+ '\n'
                          +'BEGIN\n'
                          +'SELECT '+colum2+ ' FROM INSERTED\n'
                          +'\n'
                          +'SELECT '+colum3+ ' FROM DELETED\n'
                          +'END';
  }
  

}
