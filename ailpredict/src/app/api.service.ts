import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    baseurl='http://127.8.8.1:8000'
    httpHeaders = new HttpHeaders({'content-type' : "application/json"})
  constructor(private http:HttpClient) { }
  
  
}
