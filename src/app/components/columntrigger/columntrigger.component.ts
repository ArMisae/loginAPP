import { Component, OnInit, Input } from '@angular/core';

import { Triggers } from '../../models/Triggers';
import { TriggerService } from '../../services/trigger.service';

@Component({
  selector: 'app-columntrigger',
  templateUrl: './columntrigger.component.html',
  styleUrls: ['./columntrigger.component.scss']
})
export class ColumntriggerComponent implements OnInit {
  
  @Input() trigger: Triggers;
  

  constructor( public triggerService: TriggerService) { }

  ngOnInit() {
  }

  deleteTrigger(trigger: Triggers){
    if(confirm('Esta seguro de eliminarlo?')){
      this.triggerService.deleteTrigger(trigger);
    }
    
  }

}
