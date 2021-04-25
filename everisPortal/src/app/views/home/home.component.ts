import { Component, OnInit } from '@angular/core';
// import * as mockDados from '../../assets/teste.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  pessoa;
  ngOnInit(): void {
    
    
    import("../../../assets/teste.json").then(data => {
      this.pessoa = data;
    });

  }



}
