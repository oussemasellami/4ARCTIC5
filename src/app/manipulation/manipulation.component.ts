import { Component, ViewChild } from '@angular/core';
import { AppartmentComponent } from '../appartment/appartment.component';

@Component({
  selector: 'app-manipulation',
  templateUrl: './manipulation.component.html',
  styleUrls: ['./manipulation.component.css']
})
export class ManipulationComponent {
m:string="hello 4arctic 5"

items=['item','item2']

@ViewChild(AppartmentComponent)
private apart:AppartmentComponent | undefined

additemparent(event:string){
  this.items.push(event)
}

showView(){
 this.apart?.showViewchild() 
}
}
