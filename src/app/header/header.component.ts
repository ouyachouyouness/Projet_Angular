import { Component, OnInit } from '@angular/core';
import { backEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private backEndService: backEndService ) { }

  ngOnInit(): void {
  }

  onSave(){
    console.log("pnSave()");
    this.backEndService.saveData()
    
  }
}
