import { Component, Inject, OnInit } from '@angular/core';
import { CreateSiteRequest } from '../sites.collection';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SitesService } from '../sites.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';

@Component({
  selector: 'app-form-sites',
  templateUrl: './form-sites.component.html',
  styleUrls: ['./form-sites.component.scss'],
})
export class FormSitesComponent implements OnInit {
  sites: CreateSiteRequest = new CreateSiteRequest();

  constructor(
    private dialogRef: MatDialogRef<FormSitesComponent>,
    private siteService: SitesService,
    private layoutService: LayoutsService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    if (data) {
      this.sites = data;
    }
  }

  ngOnInit() {}

  onSaved() {
    if (this.data?.uuid) {
      this.updateSite();
    } else {
      this.createSites();
    }
  }

  updateSite() {
    this.siteService
      .updateSite(this.sites, this.sites.uuid)
      .subscribe((res) => {
        if (res) {
          this.layoutService.successMessage(
            'Updated!',
            'Your sites has been update.'
          );
          this.dialogRef.close(true);
        }
      });
  }

  createSites() {
    this.siteService.createSite(this.sites).subscribe((res) => {
      if (res) {
        this.layoutService.successMessage(
          'Created!',
          'Your site has been create.'
        );
        this.dialogRef.close(true);
      }
    });
  }
}
