import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private baseUrl = 'http://localhost:8085/';
  // private url = this.baseUrl;
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {}

  login(username: string|null, password: string|null): Observable<User> {
    // Make credentials
    const credentials = this.generateBasicAuthCredentials(username, password);
    // Send credentials as Authorization header specifying Basic HTTP authentication
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Basic ${credentials}`,
        'X-Requested-With': 'XMLHttpRequest',
      }),
    };

    // Create GET request to authenticate credentials
    return this.http.get<User>(this.url + 'authenticate', httpOptions).pipe(
      tap((newUser) => {
        // While credentials are stored in browser localStorage, we consider
        // ourselves logged in.
        localStorage.setItem('credentials', credentials);
        return newUser;
      }),
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('AuthService.login(): error logging in user.')
        );
      })
    );
  }


  getLoggedInUser(): Observable <User>  {
    let credentials = this.getCredentials();
    if (credentials === null){
      throw Error("not logged in")
    }

    let decoded = atob(credentials);
    let username = decoded.split(":")[0];
    let password = decoded.split(":")[1];
    console.log(decoded);
    console.log(username);
    console.log(password);
    let user1 = null;
    return this.login(username, password)
    //return null;
  }

  register(user: User): Observable<User>  {
    // Create POST request to register a new account
    return this.http.post<User>(this.url + 'register', user).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('AuthService.register(): error registering user.')
        );
      })
    );
  }

  logout(): void {
    localStorage.removeItem('credentials');
  }

  checkLogin(): boolean {
    if (localStorage.getItem('credentials')) {
      return true;
    }
    return false;
  }

  generateBasicAuthCredentials(username: string | null, password: string | null): string {
    return btoa(`${username}:${password}`);
  }

  getCredentials(): string | null {
    return localStorage.getItem('credentials');
  }
}


