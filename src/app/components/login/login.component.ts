import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-login',
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatCardModule,RouterLink,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.email, this.password).subscribe((data:any) => {
     localStorage.setItem("userId",data?.localId);
     localStorage.setItem('auth_token',data?.idToken)
      this.router.navigate(['/dashboard']);
    },(err => alert(err.message)));
  }
}
