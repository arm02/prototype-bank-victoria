import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChannelsComponent } from './channels/channels.component';
import { NewsComponent } from './news/news.component';
import { WriterComponent } from './writer/writer.component';
import { UsersComponent } from './users/users.component';
import { HelpComponent } from './help/help.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { HttpClientModule } from '@angular/common/http';
import { CloudinaryService } from '../services/cloudinary.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { ImagesComponent } from './images/images.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CreateImagesComponent } from './images/create-images/create-images.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormNewsComponent } from './news/form-news/form-news.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ImageBucketComponent } from '../dialog/image-bucket/image-bucket.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FormChannelsComponent } from './channels/form-channels/form-channels.component';
import { FormWriterComponent } from './writer/form-writer/form-writer.component';
import { FormUserComponent } from './users/form-user/form-user.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ListNewsComponent } from '../dialog/list-news/list-news.component';
import { AdsFormComponent } from './homepage/ads-form/ads-form.component';
import { ConfigChannelComponent } from './channels/config-channel/config-channel.component';
import { MediaComponent } from './media/media.component';
import { FormMediaComponent } from './media/form-media/form-media.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { FormAdsComponent } from './homepage/form-ads/form-ads.component';
import { FormAdsChannelComponent } from './channels/config-channel/form-ads-channel/form-ads-channel.component';
import { AddWidgetComponent } from './news/form-news/add-widget.component';
import { ContactComponent } from './contact/contact.component';
import { DetailContactComponent } from './contact/detail-contact/detail-contact.component';
import { AdsComponent } from './ads/ads.component';
import { MasterDataFormAdsComponent } from './ads/form-ads/form-ads.component';
import { AddPointPentingComponent } from './news/form-news/add-point-penting.component';
import { NewslatterComponent } from './newslatter/newslatter.component';
import { ChangelogsComponent } from './changelogs/changelogs.component';
import { FormChangelogsComponent } from './changelogs/form-changelogs/form-changelogs.component';
import { AddEmbedLinkComponent } from './news/form-news/add-embed-link.component';
import { FeedbackFormComponent } from '../feedback-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SitesComponent } from './sites/sites.component';
import { FormSitesComponent } from './sites/form-sites/form-sites.component';
import { ConfigSitesComponent } from './sites/config-sites/config-sites.component';
import { AddEmbedTradingViewComponent } from './news/form-news/add-trading-view.component';
import { TradingCodeComponent } from './trading-code/trading-code.component';
import { FormTradingCodeComponent } from './trading-code/form-trading-code/form-trading-code.component';
import { ImportTradingCodeComponent } from './trading-code/import-trading-code/import-trading-code.component';
import { DataWrapperComponent } from './data-wrapper/data-wrapper.component';
import { FormDataWrapperComponent } from './data-wrapper/form-data-wrapper/form-data-wrapper.component';
import { AdsArticleComponent } from './article-ads/article-ads.component';
import { MasterDataFormAdsArctileComponent } from './article-ads/form-article-ads/form-article-ads.component';
import { AutosaveService } from '../services/autosave.service';
import { DeletedNewsComponent } from './news/deleted-news/deleted-news.component';
import { DashboardVictoriaComponent } from './dashboard-victoria/dashboard-victoria.component';
import { AnotherArticleComponent } from './dashboard-victoria/components/another-article/another-article.component';
@NgModule({
  declarations: [
    DashboardComponent,
    HomepageComponent,
    ChannelsComponent,
    NewsComponent,
    WriterComponent,
    UsersComponent,
    HelpComponent,
    ImagesComponent,
    CreateImagesComponent,
    FormNewsComponent,
    ImageBucketComponent,
    FormChannelsComponent,
    FormWriterComponent,
    FormUserComponent,
    ListNewsComponent,
    AdsFormComponent,
    ConfigChannelComponent,
    MediaComponent,
    FormMediaComponent,
    FormAdsComponent,
    FormAdsChannelComponent,
    AddWidgetComponent,
    ContactComponent,
    DetailContactComponent,
    AdsComponent,
    MasterDataFormAdsComponent,
    AddPointPentingComponent,
    NewslatterComponent,
    ChangelogsComponent,
    FormChangelogsComponent,
    AddEmbedLinkComponent,
    FeedbackFormComponent,
    SitesComponent,
    FormSitesComponent,
    ConfigSitesComponent,
    AddEmbedTradingViewComponent,
    TradingCodeComponent,
    FormTradingCodeComponent,
    ImportTradingCodeComponent,
    DataWrapperComponent,
    FormDataWrapperComponent,
    AdsArticleComponent,
    MasterDataFormAdsArctileComponent,
    DeletedNewsComponent,
    DashboardVictoriaComponent,
    AnotherArticleComponent,
  ],
  exports: [
    DashboardComponent,
    HomepageComponent,
    ChannelsComponent,
    NewsComponent,
    WriterComponent,
    UsersComponent,
    HelpComponent,
    ImagesComponent,
    CreateImagesComponent,
    FormNewsComponent,
    ImageBucketComponent,
    FormChannelsComponent,
    FormWriterComponent,
    FormUserComponent,
    ListNewsComponent,
    AdsFormComponent,
    ConfigChannelComponent,
    MediaComponent,
    FormMediaComponent,
    FormAdsComponent,
    FormAdsChannelComponent,
    ContactComponent,
    DetailContactComponent,
    AdsComponent,
    MasterDataFormAdsComponent,
    AddPointPentingComponent,
    NewslatterComponent,
    ChangelogsComponent,
    FormChangelogsComponent,
    AddEmbedLinkComponent,
    FeedbackFormComponent,
    SitesComponent,
    FormSitesComponent,
    ConfigSitesComponent,
    AddEmbedTradingViewComponent,
    TradingCodeComponent,
    FormTradingCodeComponent,
    ImportTradingCodeComponent,
    DataWrapperComponent,
    FormDataWrapperComponent,
    AdsArticleComponent,
    MasterDataFormAdsArctileComponent,
    DeletedNewsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    EditorModule,
    HttpClientModule,
    FormsModule,
    LayoutsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    NgxDropzoneModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatDividerModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    // MatomoModule.forRoot({
    //   scriptUrl: '//investortrustidanalystics.matomo.cloud/matomo.js',
    //   trackers: [
    //     {
    //       trackerUrl: 'https://investortrustidanalystics.matomo.cloud/index.php',
    //       siteId: 1,
    //     },
    //   ],
    //   routeTracking: {
    //     enable: true,
    //   },
    // }),
  ],
  providers: [
    CloudinaryService,
    AutosaveService,
    DatePipe,
    {
      provide: MatDialogRef,
      useValue: {},
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {},
    },
  ],
})
export class PagesModule {}
