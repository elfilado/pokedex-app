import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  message: string = 'Vous êtes déconnecté. (youare/incredible)';
  user: string;
  password: string;
  auth: AuthService;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth = this.authService;
  }

  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = 'Vous êtes connecté.';
    }
    else {
      this.message = 'Identifiant ou mot de passe incorrect.';
    }
  }

  logIn() {
    this.message = 'Tentative de connexion en cours...';
    this.auth.logIn(this.user, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(['/pokemons']);
        }
        else {
          this.password = '';
          this.router.navigate(['/login']);
        }
      })
  }

  logOut() {
    this.auth.logOut();
    this.message = 'Vous êtes déconnecté.';
  }

}
