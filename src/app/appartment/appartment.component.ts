import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppartmentService } from '../service/appartment.service';
import { Apartment } from '../models/apartment';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent implements OnInit {

  var1:string='salut 4 arctic 5'

  ////////////////////////////////////input///////////////////////////////////
  @Input()
s:string=""
////////////////////////////output//////////////////////////////////////////
@Output() additems=new EventEmitter<string>();
additem(value:string){
  console.log(value)
  this.additems.emit(value)

}
listappart:Apartment[]=[]
  constructor( private apartmenservice:AppartmentService){}

  ngOnInit(): void {
    this.apartmenservice.getappart().subscribe((data)=>{
this.listappart=data
console.log("ma list"+JSON.stringify(this.listappart))
    })
      
  }

  deleteappart(id:number){
this.apartmenservice.deleteappart(id).subscribe(()=>{
  console.log("deleted")
  window.location.reload()
})
  }

  showViewchild(){
    console.log("hello 4 arctic 5")
  }

}
