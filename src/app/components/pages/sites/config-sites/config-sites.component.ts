import { Component, OnInit } from '@angular/core';
import { SitesService } from '../sites.service';
import { ActivatedRoute } from '@angular/router';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { MatDialog } from '@angular/material/dialog';
import { ListNewsComponent } from 'src/app/components/dialog/list-news/list-news.component';

@Component({
  selector: 'app-config-sites',
  templateUrl: './config-sites.component.html',
  styleUrls: ['./config-sites.component.scss'],
})
export class ConfigSitesComponent implements OnInit {
  site: any;
  siteHeadline: any;
  siteSubHeadline: any;
  displayedColumnsHeadline: any[] = [
    {
      value: 'titleHeadline',
      type: 'string',
      title: 'Name',
      width: '60%',
    },
    {
      value: 'typeHeadline',
      type: 'string',
      title: 'Type',
      width: '20%',
    },
    {
      value: 'action',
      actions: ['edit', 'delete'],
      type: 'action',
      title: 'Action',
      width: '20%',
    },
  ];
  constructor(
    private siteService: SitesService,
    private route: ActivatedRoute,
    private layoutService: LayoutsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getSiteById();
  }

  getSiteById() {
    this.siteService
      .getSitesById(this.route.snapshot.paramMap.get('id'))
      .subscribe((res) => {
        this.site = res.site;
        this.getHeadlineById();
      });
  }

  getHeadlineById() {
    this.siteService.getSiteHeadlineById(this.site.uuid).subscribe((res) => {
      this.siteHeadline = res.data.find((res: any) => res.type === 'main');
      this.siteSubHeadline = res.data.filter((res: any) => res.type === 'sub');
      if (!this.siteHeadline) {
        this.siteHeadline = {
          headline_id: null,
          titleHeadline: 'Not Setup',
          image:
            'https://res.cloudinary.com/dzvyafhg1/image/upload/empty-image.png',
        };
      }
      while (this.siteSubHeadline.length < 3) {
        this.siteSubHeadline.push({
          headline_id: null,
          titleHeadline: 'Not Setup',
          image:
            'https://res.cloudinary.com/dzvyafhg1/image/upload/empty-image.png',
        });
      }
    });
  }

  updateHeadline(type: string, id: string) {
    const dialogRef = this.dialog.open(ListNewsComponent, {
      height: '750px',
      width: '1200px',
      data: {
        site_id: this.site.uuid,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createHeadline(result, type, id);
      }
    });
  }

  createHeadline(body: any, type: string, id: string) {
    const params = {
      uuid: id,
      post_id: body.post_id,
      site_id: this.site.uuid,
      type: type,
    };
    this.siteService.postSiteHeadline(params).subscribe({
      next: () => {
        this.getHeadlineById();
      },
    });
  }
}
