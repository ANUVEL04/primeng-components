import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-componenet-c',
  templateUrl: './componenet-c.component.html',
  styleUrls: ['./componenet-c.component.css']
})
export class ComponenetCComponent implements OnInit {
  textReceived='';
  constructor(private readonly AppService:AppService) { }

  ngOnInit(): void {

    this.AppService.getValue().subscribe(result=>{this.textReceived=result;

    })

    
  }

}
