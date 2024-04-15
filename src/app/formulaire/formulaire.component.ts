import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  formresidence!:FormGroup
  var1:string="bonjour"
ngOnInit(): void {
    
  this.formresidence= new FormGroup({
    id:new FormControl("",Validators.required),
    name:new FormControl("",Validators.required),
    address:new FormControl("",Validators.required)
  })
}

add(){
  console.log(this.formresidence.value)
}
}
