import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { merge } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  hide = signal(true);
  errorMessage = signal('');
  loginForm: FormGroup;
  formErrors = signal<string[]>([]);

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('Le mail ne peut être vide');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Email Invalide');
    } else {
      this.errorMessage.set('');
    }
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.formErrors.update(errors => [])
    
    if (this.loginForm.valid) {
      try {
        this.authService.login(this.loginForm.value).subscribe((response) => {          
          sessionStorage.setItem('token', uuidv4());
          sessionStorage.setItem('userId', response.id);
          sessionStorage.setItem('userIdNumber', response.fields.ID);
          console.log(sessionStorage);
  
          this.router.navigate(['/home']).then(() => {
            location.reload();
          });
        });
      } catch (error: any) {
        this.formErrors.update(errors => [...errors, error]);
      }
    } else {
      console.log(this.loginForm.value.email === '');
      
      if (this.loginForm.value.email === '') {
        this.formErrors.update(errors => [...errors, "L'adresse mail est vide ou incorrecte."]);
      }
      if (this.loginForm.value.password === '') {
        this.formErrors.update(errors => [...errors, "Le champ correspondant au mot de passe est vide."]);
      }
    }
  }



}
