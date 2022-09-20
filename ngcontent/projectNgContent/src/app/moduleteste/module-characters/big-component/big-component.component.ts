import { Component, OnInit } from '@angular/core';
import { usuarioLogin } from 'src/app/model/usuarioLogin';

@Component({
  selector: 'app-big-component',
  templateUrl: './big-component.component.html',
  styleUrls: ['./big-component.component.css']
})
export class BigComponentComponent implements OnInit {

  usuarioLogin:usuarioLogin = new usuarioLogin

  constructor() { }

  ngOnInit(): void {
  }

}
