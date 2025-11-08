import { NgModule, Injectable } from '@angular/core';
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from 'src/app/errors/page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChannelsComponent } from './channels/channels.component';
import { ImagesComponent } from './images/images.component';
import { NewsComponent } from './news/news.component';
import { WriterComponent } from './writer/writer.component';
import { UsersComponent } from './users/users.component';
import { HelpComponent } from './help/help.component';
import { AuthGuard } from 'src/app/auth/auth.guards';
import { ConfigChannelComponent } from './channels/config-channel/config-channel.component';
import { FormNewsComponent } from './news/form-news/form-news.component';
import { Title } from '@angular/platform-browser';
import { MediaComponent } from './media/media.component';
import { FormMediaComponent } from './media/form-media/form-media.component';
import { ContactComponent } from './contact/contact.component';
import { AdsComponent } from './ads/ads.component';
import { NewslatterComponent } from './newslatter/newslatter.component';
import { SitesComponent } from './sites/sites.component';
import { ConfigSitesComponent } from './sites/config-sites/config-sites.component';
import { TradingCodeComponent } from './trading-code/trading-code.component';
import { DataWrapperComponent } from './data-wrapper/data-wrapper.component';
import { AdsArticleComponent } from './article-ads/article-ads.component';
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
    component: DashboardComponent,
  },
  {
    path: 'pages',
    children: [
      {
        path: 'homepage',
        title: 'CMS Investor Trust - Berita Utama',
        component: HomepageComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'channels',
        title: 'CMS Investor Trust - Kanal',
        component: ChannelsComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'channels/:id',
        title: 'CMS Investor Trust - Kanal',
        component: ConfigChannelComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'sites',
        title: 'CMS Investor Trust - Situs',
        component: SitesComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'sites/:id',
        title: 'CMS Investor Trust - Situs',
        component: ConfigSitesComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'image-list',
        title: 'CMS Investor Trust - Aset Media',
        component: ImagesComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'news',
        title: 'CMS Investor Trust - Berita Regular',
        component: NewsComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'news/create',
        title: 'CMS Investor Trust - Berita Regular',
        component: FormNewsComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'news/:id',
        title: 'CMS Investor Trust - Berita Regular',
        component: FormNewsComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'media',
        title: 'CMS Investor Trust - Berita Media',
        component: MediaComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'media/create',
        title: 'CMS Investor Trust - Berita Media',
        component: FormMediaComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'media/:id',
        title: 'CMS Investor Trust - Berita Media',
        component: FormMediaComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'ads',
        title: 'CMS Investor Trust - ⁠Kelola Iklan Regular',
        component: AdsComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'ads-article',
        title: 'CMS Investor Trust - ⁠Kelola Iklan Artikel',
        component: AdsArticleComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'writer',
        title: 'CMS Investor Trust - Penulis',
        component: WriterComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'editor',
        },
      },
      {
        path: 'users',
        title: 'CMS Investor Trust - Pengguna',
        component: UsersComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'admin',
        },
      },
      {
        path: 'contacts',
        title: 'CMS Investor Trust - Formulir Kontak',
        component: ContactComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'admin',
        },
      },
      {
        path: 'newslatter',
        title: 'CMS Investor Trust - Email Berlangganan',
        component: NewslatterComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'admin',
        },
      },
      {
        path: 'trading-code',
        title: 'CMS Investor Trust - Trading View',
        component: TradingCodeComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'admin',
        },
      },
      {
        path: 'data-wrapper',
        title: 'CMS Investor Trust - Data Wrapper',
        component: DataWrapperComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
        },
      },
      {
        path: 'help',
        component: HelpComponent,
        canActivate: [AuthGuard],
        data: {
          role: 'all',
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
export class PagesRoutingModule {}
