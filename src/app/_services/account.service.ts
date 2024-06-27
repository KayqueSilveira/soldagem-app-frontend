import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User | null {
        return this.userSubject.value;
    }

    login(username: string, password: string): Observable<User> {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // armazenar detalhes do usuário e token JWT no localStorage para manter o usuário conectado entre atualizações de página
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout(): void {
        // remover usuário do localStorage e definir usuário atual como nulo
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(user: User): Observable<any> {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string): Observable<User> {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id: string, params: any): Observable<any> {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(response => {
                // atualizar usuário armazenado se o usuário logado atualizou seu próprio registro
                if (id === this.userValue?.id) {
                    // atualizar localStorage
                    const updatedUser = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(updatedUser));

                    // publicar usuário atualizado para os assinantes
                    this.userSubject.next(updatedUser);
                }
                return response;
            }));
    }

    delete(id: string): Observable<any> {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(response => {
                // fazer logout automático se o usuário logado deletou seu próprio registro
                if (id === this.userValue?.id) {
                    this.logout();
                }
                return response;
            }));
    }
}
