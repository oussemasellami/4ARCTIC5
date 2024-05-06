import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../models/residence';
import { AppartmentService } from '../service/appartment.service';
import { Apartment } from '../models/apartment';

@Component({
  selector: 'app-updateappart',
  templateUrl: './updateappart.component.html',
  styleUrls: ['./updateappart.component.css']
})
export class UpdateappartComponent implements OnInit {
  formappart!:FormGroup
id!:number

res:Residence= {
  "id": 1,
  "name": "El fel",
  "address": "Borj Cedria",
  "image": "../../assets/images/residence1.jpg"
}
listapart:Apartment[]=[]
  constructor(private act:ActivatedRoute,
    private appartservice:AppartmentService,private router:Router){

  }

  ngOnInit(): void {
      this.id=this.act.snapshot.params['id']

      this.formappart=new FormGroup({
        appartNum:new FormControl('',Validators.required),
        description:new FormControl('',Validators.required),
        residence:new FormControl(this.res,Validators.required)
      })
      this.appartservice.getbyidappart(this.id).subscribe((data)=>{
this.listapart=data
this.formappart.patchValue(this.listapart as any)
      })
  }

  update(){
    this.appartservice.updateappart(this.id,this.formappart.value)
    .subscribe(()=>{
      console.log("updated")
      this.router.navigate(['/appartment'])
    })

  }

}
