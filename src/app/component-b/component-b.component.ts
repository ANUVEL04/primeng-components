import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {
   textreceived='';
  constructor(private  readonly AppService:AppService) { }

  ngOnInit(): void {
    this.AppService.getValue().subscribe(value=> {this.textreceived=value;
    })
  }

}
