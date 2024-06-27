import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';
import { MatSidenav } from '@angular/material/sidenav'; // Importe o MatSidenav


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  user: User | null;
  @ViewChild('sidenav') sidenav!: MatSidenav; // Declare a propriedade sidenav


  constructor(private accountService: AccountService, private router: Router) {
    this.user = this.accountService.userValue;
  }

  logout(): void {
    this.accountService.logout();
  }

  ngOnInit(): void {
    this.accountService.user.subscribe(user => {
      this.user = user;
      if (user) {
        // Se o usuário estiver logado, verificar a rota atual
        const currentUrl = this.router.url;
        if (currentUrl.includes('/account/login') || currentUrl.includes('/account/register')) {
          console.log(currentUrl)
          this.router.navigate(['/home']); // Redirecionar para a home se estiver em login ou registro
        }
      } else {
        // Se não estiver logado, redirecionar para a página de login
        console.log("O usuario é: ", user)
        this.router.navigate(['']);
      }
    });
  }
}
