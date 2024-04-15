import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

/*export function forbiddenNameValidator(x:string){
  if(x==="arctic"){
return true
  }
  return false
}*/
export class FormulaireComponent implements OnInit {
  formresidence!:FormGroup
  var1:string="bonjour"
ngOnInit(): void {
  
  this.formresidence= new FormGroup({
    id:new FormControl("",[Validators.required,Validators.pattern('^[1-9]*$')]),
    name:new FormControl("",[Validators.required,Validators.minLength(4)]),
    address:new FormControl("",[Validators.required,Validators.pattern('^[A-Za-z]*$')/*forbiddenNameValidator(/arctic/i)*/])
  })
}
get name(){return this.formresidence.get("name")}

add(){
  console.log(this.formresidence.value)
}
}
