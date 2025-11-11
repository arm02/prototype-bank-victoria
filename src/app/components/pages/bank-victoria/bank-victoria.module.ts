import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { BankVictoriaPagesRoutingModule } from './bank-victoria-routing.module';
import { ProgramComponent } from './program/program.component';
import { BankVictoriaComponent } from './bank-victoria.component';
import { RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ProgramDetailComponent } from './program/program-detail/program-detail.component';
import { NavigationComponent } from './program/navigation/navigation.component';
import { DetailScheduleComponent } from './schedule/dialog/detail-schedule/detail-schedule.component';
import { CertificationComponent } from './certification/certification.component';
@NgModule({
  declarations: [
    ProgramComponent,
    BankVictoriaComponent,
    ScheduleComponent,
    ProgramDetailComponent,
    NavigationComponent,
    DetailScheduleComponent,
    CertificationComponent,
  ],
  exports: [
    ProgramComponent,
  ],
  imports: [
    CommonModule,
    BankVictoriaPagesRoutingModule,
    RouterModule,
    FullCalendarModule,
    MatBottomSheetModule
  ],
  providers: [
  ],
})
export class BankVictoriaPagesModule { }
