import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  queryResponse = new Subject<any>(); 
  tokenResponse = new Subject<any>()
  colorResponse = new Subject<any>();
  public loading = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  getTracks(query: any){
    this.loading.next(true)
    this.http.get(`http://localhost:5000//${query}`).subscribe(data => {
      this.loading.next(false)
      this.queryResponse.next(data)
    },
    error => {
      console.error('An error occurred:', error);
      this.queryResponse.next({})
      this.loading.next(false);
    }
    );
  }
  changeBackground(color:any){
    this.colorResponse.next(color)
  }
}
