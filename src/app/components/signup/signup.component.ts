import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-signup',
  imports: [ CommonModule,FormsModule,MatCardModule,MatFormFieldModule,RouterLink,MatInputModule,MatButtonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  signup() {
    this.auth.signup(this.email, this.password).subscribe(() => {
      this.router.navigate(['/login']);
    },(err => alert(err.message))
  );
  }
}
