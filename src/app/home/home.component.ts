﻿import { Component } from '@angular/core';

import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User | null;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
        console.log('User in HomeComponent constructor:', this.user); // Debug
    }

    logout(): void {
      this.accountService.logout();
    }
}
