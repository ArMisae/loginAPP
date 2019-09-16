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

  Generar(Trigger: Triggers){
    let colum: Array<any> = [];
    let colum2: Array<any> = [];
    let colum3: Array<any> = [];
    for (let i = 0; i < this.triggers.length; i++) {
       colum.push('@'+Trigger[i].column+'Nuevo AS '+Trigger[i].type+'('+Trigger[i].number+')\n'+',@'+Trigger[i].column+'Anterior AS '+Trigger[i].type+'('+Trigger[i].number+')\n');
    }
    for (let i = 0; i < this.triggers.length; i++) {
      colum2.push('@'+Trigger[i].column+'Nuevo = '+Trigger[i].column);
    }
   for (let i = 0; i < this.triggers.length; i++) {
    colum3.push('@'+Trigger[i].column+'Anterior = '+Trigger[i].column);
    }
    this.descripcion =  'CREATE TRIGGER tr_UpdAuditoria ON ' + Trigger[0].table+ ' AFTER UPDATE\n'
                          + 'AS\n'
                          + 'DECLARE '+colum+ '\n'
                          +'BEGIN\n'
                          +'SELECT '+colum2+ ' FROM INSERTED\n'
                          +'\n'
                          +'SELECT '+colum3+ ' FROM DELETED\n'
                          +'END';
  }
  

}
