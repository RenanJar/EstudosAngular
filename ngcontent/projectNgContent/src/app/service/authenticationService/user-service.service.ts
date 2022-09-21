import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usuarioLogin } from 'src/app/model/usuarioLogin';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http: HttpClient
  ) { }


  public entrar(usuarioLogin:usuarioLogin): Observable<usuarioLogin | void >{
    
    const url = `${environment.baseUrl}/logar`
  
    return this.http.post<usuarioLogin>(url,usuarioLogin).pipe(map((data)=> this.setTokenLocalStorage(data)),
    catchError((err)=>{
      this.removerTokenLocalStorage();
      throw 'falha ao efetuar login'
    })
    ) 
  };

  private getToken():string | null{
    return localStorage.getItem(environment.token);
  }

  private setTokenLocalStorage(respose: usuarioLogin){
    const usuarioToken:usuarioLogin = respose;
    localStorage.setItem(environment.token, usuarioToken.token)
  }

  private removerTokenLocalStorage():void{
    localStorage.removeItem(environment.token)
  }
  
}
