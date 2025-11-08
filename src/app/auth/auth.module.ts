import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SigninComponent],
  exports: [SigninComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  providers: [AuthService],
})
export class AuthModule {}
