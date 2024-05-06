import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from '../models/residence';
import { AppartmentService } from '../service/appartment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addappart',
  templateUrl: './addappart.component.html',
  styleUrls: ['./addappart.component.css']
})
export class AddappartComponent implements OnInit {

  formappart!:FormGroup
  id!:number
  
  res:Residence= {
    "id": 1,
    "name": "El fel",
    "address": "Borj Cedria",
    "image": "../../assets/images/residence1.jpg"
  }
  constructor(
    private appartservice:AppartmentService,private router:Router){

  }
  ngOnInit(): void {
    this.formappart=new FormGroup({
      appartNum:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      residence:new FormControl(this.res,Validators.required)
    })
  }
add(){
  this.appartservice.addappart(this.formappart.value).subscribe(()=>{
    console.log(" added")
    this.router.navigate(['/appartment'])
  })
}
}
