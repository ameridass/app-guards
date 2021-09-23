import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthGuard]
})
export class LoginComponent implements OnInit {

  userName: string;
  userPassword: string;
  titulo = 'Bienvenido'
  constructor(private auuth: AuthService ,private rutas: Router) { 
    this.userName = '';
    this.userPassword = '';
  }

  ngOnInit(): void {
  }

  getHome(){
    if(this.auuth.isLogged(this.userName, this.userPassword)){
      this.rutas.navigateByUrl('home')
    }
    this.titulo = 'Usuario o contraseña incorrectos'
  }
 

}
