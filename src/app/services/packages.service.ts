import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Package } from '../models/package.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PackagesService {
  constructor(private http: HttpClient) {}

  public getData(): Observable<Package[]> {
    return this.http.get<Package[]>('http://localhost:3000/packages');
  }

  public getDependenciesForPackage(id: string): Observable<string[]>{
    return this.http.get<string[]>(`http://localhost:3000/packages/${id}/dependencies`);
  }
}
