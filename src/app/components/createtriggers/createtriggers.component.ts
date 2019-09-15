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
  

}
