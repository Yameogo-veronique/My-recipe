import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {
  headers: HttpHeaders;

  constructor(
    public http: HttpClient
  ) {
    this.headers= new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
   }
  ENREGISTRER(data){
    return this.http.post('http://localhost/gestion-recette/database/create.php', data);

  }
}
