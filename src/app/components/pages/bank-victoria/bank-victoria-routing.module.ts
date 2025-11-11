import { NgModule, Injectable } from '@angular/core';
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guards';
import { Title } from '@angular/platform-browser';
import { ProgramComponent } from './program/program.component';
import { BankVictoriaComponent } from './bank-victoria.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DetailArticleComponent } from '../dashboard-victoria/pages/detail-article/detail-article.component';
import { ProgramDetailComponent } from './program/program-detail/program-detail.component';
import { CertificationComponent } from './certification/certification.component';
@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(title);
    }
  }
}
const routes: Routes = [
  {
    path: '',
    component: BankVictoriaComponent,
    canActivate: [AuthGuard],
    title: 'Beranda | PT. Bank Victoria International, Tbk',
    data: {
      navTitle: 'Beranda',
    },
    children: [
      {
        path: 'program',
        title: 'Program | PT. Bank Victoria International, Tbk',
        component: ProgramComponent,
        canActivate: [AuthGuard],
        data: {
          navTitle: 'Daftar Program',
          role: 'all',
        },
      },
      {
        path: 'program/detail',
        title: 'Detil Program | PT. Bank Victoria International, Tbk',
        component: ProgramDetailComponent,
        canActivate: [AuthGuard],
        data: {
          navTitle: 'Detil Program',
          role: 'all',
          showBack: true
        },
      },
      {
        path: 'sertifikat',
        title: 'Sertifikat | PT. Bank Victoria International, Tbk',
        component: CertificationComponent,
        canActivate: [AuthGuard],
        data: {
          navTitle: 'Sertifikat',
          role: 'all',
        },
      },
      {
        path: 'jadwal-pelatihan',
        title: 'Jadwal Pelatihan | PT. Bank Victoria International, Tbk',
        component: ScheduleComponent,
        canActivate: [AuthGuard],
        data: {
          navTitle: 'Jadwal Pelatihan',
          role: 'all',
        },
      },
      {
        path: 'article/detail-article',
        title: 'Detail Artikel | PT. Bank Victoria International, Tbk',
        component: DetailArticleComponent,
        canActivate: [AuthGuard],
        data: {
          navTitle: 'Detail Artikel',
          role: 'all',
          showBack: true
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ],
})
export class BankVictoriaPagesRoutingModule {}
