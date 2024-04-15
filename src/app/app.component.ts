import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  var1:string="bonjour arctic5"
  prop:boolean=false
  prop1:string="bonjour arctic5...."


  add(){
    console.log('added...')
  }
}
