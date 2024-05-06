import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../models/apartment';

@Injectable({
  providedIn: 'root'
})
export class AppartmentService {

  constructor(private http:HttpClient ) { }

  getnumber(list:any,creteria:string,value:any){
    console.log('hello 4arctic5')
    let n=0
    for(let i in list){
      if(list[i][creteria]==value){
        n++
      }
    }
    return n
  }

  getappart():Observable<Apartment[]>{
    return this.http.get<Apartment[]>('http://localhost:3000/appartement')
  }

  addappart(appart:Apartment):Observable<Apartment[]>{
    return this.http.post<Apartment[]>('http://localhost:3000/appartement',appart)
  }

  deleteappart(id:any):Observable<Apartment[]>{
    return this.http.delete<Apartment[]>('http://localhost:3000/appartement'+'/'+id)
  }

  updateappart(id:any,appart:Apartment):Observable<Apartment[]>{
    return this.http.put<Apartment[]>('http://localhost:3000/appartement'+'/'+id,appart)
  }

  getbyidappart(id:any):Observable<Apartment[]>{
    return this.http.get<Apartment[]>('http://localhost:3000/appartement'+'/'+id)
  }
}
