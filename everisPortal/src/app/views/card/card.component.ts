import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/classes/pessoa';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() dadosPessoa:Pessoa;

  ngOnInit(): void {
  }

  // imagem = 'https://avatars.dicebear.com/api/bottts/' + {{pessoa.nome}.svg

}



