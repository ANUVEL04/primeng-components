import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  myText='';

  constructor(private readonly AppServices:AppService) {}

  ngOnInit(): void {

  }
  handleClick() : void{
    this.AppServices.setValue(this.myText);
    
  }

}
