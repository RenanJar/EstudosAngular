import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { usuarioLogin } from 'src/app/model/usuarioLogin';
import { UserServiceService } from 'src/app/service/authenticationService/user-service.service';

@Component({
  selector: 'app-big-component',
  templateUrl: './big-component.component.html',
  styleUrls: ['./big-component.component.css']
})
export class BigComponentComponent implements OnInit {

  loginUsuarioForm!: FormGroup;

  constructor(private userService:UserServiceService,
      private userFormBuilder:FormBuilder,) {

      }

  ngOnInit(): void {
    this.loginUsuarioForm = this.userFormBuilder.group({
      usuario:[''],
      senha:['']
    })
  }

}
