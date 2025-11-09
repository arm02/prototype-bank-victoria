import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankVictoriaPagesRoutingModule } from './bank-victoria-routing.module';
import { ProgramComponent } from './program/program.component';
import { BankVictoriaComponent } from './bank-victoria.component';
import { RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
@NgModule({
  declarations: [
    ProgramComponent,
    BankVictoriaComponent,
    ScheduleComponent,
  ],
  exports: [
    ProgramComponent,
  ],
  imports: [
    CommonModule,
    BankVictoriaPagesRoutingModule,
    RouterModule
  ],
  providers: [
  ],
})
export class BankVictoriaPagesModule { }
