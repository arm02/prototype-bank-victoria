import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Meta } from '@angular/platform-browser';
import { environment } from 'src/environments/environments';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthCheckRequestCollection } from 'src/app/collection/auth.collection';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  postCount = 0;
  writerCount = 0;
  pageCount = 0;
  updateData: any;
  updateCMSData: any;
  displayedColumns: any[] = [
    {
      value: 'description',
      type: 'string',
      title: 'Update Description',
      width: '80%',
    },
    {
      value: 'date',
      actions: [],
      type: 'string',
      title: 'Date',
      width: '20%',
    },
  ];

  rowCountFeedback = 0;
  limitFeedback = 5;
  pageFeedback = 1;
  queryFeedback = '';
  feedback: {
    name: string;
    email: string;
    content: string;
    createdAt: string;
  }[] = [];
  displayedColumnsFeedback: any[] = [
    {
      value: 'content',
      type: 'string',
      title: 'Content',
      width: '50%',
    },
    {
      value: 'name',
      type: 'string',
      title: 'Name',
      width: '15%',
    },
    {
      value: 'email',
      type: 'string',
      title: 'Email',
      width: '15%',
    },
    {
      value: 'createdAt',
      type: 'date',
      title: 'Submit Date',
      width: '20%',
    },
  ];
  userData: AuthCheckRequestCollection = new AuthCheckRequestCollection();
  constructor(
    private dashboardService: DashboardService,
    private meta: Meta,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getCountData();
    // this.getJsonBlobData();
    // this.getJsonBlobCMSData();
    this.getFeedbackAll();
    this.meta.addTags([
      {
        name: 'description',
        content: 'Dashboard CMS Investor Trust',
      },
    ]);
    this.authService
      .authCheck()
      .subscribe((data: AuthCheckRequestCollection) => {
        this.userData = data;
      });
  }

  getCountData() {
    this.dashboardService.getCountDataDashboard().subscribe((res) => {
      this.postCount = res.postCount;
      this.writerCount = res.writerCount;
      this.pageCount = res.pageCount;
    });
  }

  getJsonBlobData() {
    this.dashboardService
      .getJsonBlobData(environment.config.updateId)
      .subscribe((res) => {
        this.updateData = res;
      });
  }

  getJsonBlobCMSData() {
    this.dashboardService
      .getJsonBlobCMSData(environment.config.updateCmsId)
      .subscribe((res) => {
        this.updateCMSData = res;
      });
  }

  syncDataFromYoutube() {
    this.dashboardService.SyncDataYoutube().subscribe();
  }

  getFeedbackAll() {
    this.dashboardService
      .getAllFeedback(this.queryFeedback, this.pageFeedback, this.limitFeedback)
      .subscribe({
        next: (res: {
          data: {
            name: string;
            email: string;
            content: string;
            createdAt: string;
          }[];
          count: number;
        }) => {
          this.feedback = res.data;
          this.rowCountFeedback = res.count;
        },
      });
  }

  paginateFeedbackEvent($event: any) {
    this.pageFeedback = $event.pageIndex + 1;
    this.limitFeedback = $event.pageSize;
    this.getFeedbackAll();
  }
}
