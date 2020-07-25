import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(public http:HttpClient) { 
  }

  public getEstados(){
    let estados = "https://covid19-brazil-api.now.sh/api/report/v1";
    return this.http.get(estados);
  }

}
