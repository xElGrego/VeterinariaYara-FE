import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Toast } from 'src/app/shared/functions/toast';
import { User } from '../../models/auth/user.model';
import { Auth } from '../../models/auth/auth.model';
import { Store } from '@ngrx/store';
import { AuthAction } from './state/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form!: FormGroup;
  Toast = new Toast();

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private store: Store
  ) {
    this.form = this.fb.group({
      user: new FormControl('', [Validators.required]),
      contrasenia: new FormControl('', [Validators.required]),
    });
  }

  Login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.Toast.ToastError(
        'Por favor ingresar los datos obligatorios marcados en rojo'
      );
      return;
    }

    const user: Auth = {
      name: this.form.get('user')?.value,
      contrasenia: this.form.get('contrasenia')?.value,
    };

    this.store.dispatch(AuthAction.login({ auth: user }));
  }
}
