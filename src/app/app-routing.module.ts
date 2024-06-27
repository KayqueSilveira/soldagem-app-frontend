import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_services/auth.guard';
import { RegisterComponent } from './account/register.component';
import { HistoricoComponent } from './historico/historico.component';
import { HeatingInputComponent } from './heating-input/heating-input.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent},
    { path: 'heating-input', component: HeatingInputComponent, canActivate: [AuthGuard]},
    { path: 'historico', component: HistoricoComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
