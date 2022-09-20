import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usuarioLogin } from 'src/app/model/usuarioLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http: HttpClient
  ) { }


  entrar(usuarioLogin:usuarioLogin): Observable<usuarioLogin>{
    return this.http.post<usuarioLogin>('https://blogpspring.herokuapp.com/usuarios/logar',usuarioLogin)
  };
  
}
