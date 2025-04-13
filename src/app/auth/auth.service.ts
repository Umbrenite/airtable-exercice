import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, from, map, Observable, switchMap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = `${environment.apiURL}/Utilisateurs`;

  constructor(private http: HttpClient) {}
  login(user: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${environment.airtableToken}`
    });

    const formula = `{email}='${user.email}'`;
    const url = `${this.apiUrl}?filterByFormula=${encodeURIComponent(formula)}`;

    return this.http.get<any>(url, { headers }).pipe(
      switchMap(res => {
        const records = res.records;

        if (records.length === 0) {
          return throwError(() => new Error('Utilisateur non trouvé'));
        }
        const record = records[0];
        const hashedPassword = record.fields["Mot de passe"];
        
        return from(bcrypt.compare(user.password, hashedPassword)).pipe(
          map(match => {
            if (!match) throw new Error('Mot de passe incorrect');
            sessionStorage.setItem("userId", record.fields.ID);
            return record;
          })
        );
      }),
      catchError(err => throwError(() => err))
    );
  }

  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  getUserId(): string | null {
    return sessionStorage.getItem('userId');
  }

  getUserIdNumber(): string | null {
    return sessionStorage.getItem('userIdNumber');
  }
}


