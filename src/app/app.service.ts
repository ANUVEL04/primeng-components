import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private sharedText=new Subject<string>();

  constructor(private http:HttpClient) { }

  getUserList(){
    return this.http.get<any>('assets/user.json');
  }
  getCountryList(){
    return this.http.get<any>('assets/country.json');
  }
  

  public getValue():Observable<string>{
    return this.sharedText;
  }

  public setValue(value : string):void{
    this.sharedText.next(value);
  }
}
