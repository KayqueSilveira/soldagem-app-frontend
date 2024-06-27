import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card'; // Importe o MatCardModule
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './account/login.component';
import { RegisterComponent } from './account/register.component';
import { HeatingInputComponent } from './heating-input/heating-input.component';
import { HistoricoComponent } from './historico/historico.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button'; // Se estiver usando botões do Angular Material
import { MatInputModule } from '@angular/material/input';



@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
    	  BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
	      FormsModule,
        MatToolbarModule,
        MatIconModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        HeatingInputComponent,
        HistoricoComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
