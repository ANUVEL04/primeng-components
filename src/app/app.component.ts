import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import {PrimeIcons} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent implements OnInit {
  userList  = [];
  cars=[];
  countryList=[];
  selectedUsers ='';
  selectedCity1='';
  events : any[]=[];
  

  
  constructor(private appservices :AppService){
    
  }
  
  ngOnInit(): void {
      this.getUserList();
      this.getCountryList();
    
      this.events = [
        {status: 'Ordered', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'game-controller.jpg'},
        {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
        {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
        {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
    ];

  }
  getUserList() {
    this.appservices.getUserList().subscribe(
      response => {
        this.userList=response;
      }
    );
  }
  getCountryList(){
    this.appservices.getCountryList().subscribe(
      response => {
        this.countryList=response;
      }
    );
  }
  


  title = 'ktern-partnercentre';
  
}
