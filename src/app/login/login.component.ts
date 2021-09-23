import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rutas: Router) { 

  }

  ngOnInit(): void {
  }

  getLogin(){
    this.rutas.navigateByUrl('home');
    console.log('Hello')
  };

 

}
