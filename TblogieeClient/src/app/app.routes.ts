import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DateInputComponent } from './shared/date-input/date-input.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'date', component: DateInputComponent },
  { path: 'register', component: RegisterComponent },
];
