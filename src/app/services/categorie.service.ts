import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl = 'http://hsysliya.ddns.net:999/api/Categorie_listP?VarPar_RefUser=Liya&VarPar_PwUser=_J?d5Lb$K70&pageNumber=1';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.apiUrl);
  }
}