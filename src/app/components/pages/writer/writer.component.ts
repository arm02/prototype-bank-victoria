import { Component, OnInit } from '@angular/core';
import { WriterService } from './writer.service';
import { WriterResponseCollection } from './write.collection';
import { MatDialog } from '@angular/material/dialog';
import { FormWriterComponent } from './form-writer/form-writer.component';
import { LayoutsService } from 'src/app/layouts/layouts.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.scss'],
})
export class WriterComponent implements OnInit {
  query = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  writers: WriterResponseCollection[] = [];
  displayedColumns: any[] = [
    {
      value: 'profilePicture',
      type: 'image-profile',
      title: 'Photo',
      width: '5%',
    },
    {
      value: 'name',
      type: 'string',
      title: 'Name',
      width: '10%',
    },
    {
      value: 'role',
      type: 'string',
      title: 'Role',
      width: '10%',
    },
    {
      value: 'expertise',
      type: 'string',
      title: 'Expertise',
      width: '10%',
    },
    {
      value: 'summaries',
      type: 'jsonparse',
      title: 'Summaries',
      width: '20%',
    },
    {
      value: 'experience',
      type: 'html',
      title: 'Experience',
      width: '10%',
    },
    {
      value: 'linkedin',
      type: 'string',
      title: 'URL Linkedin',
      width: '10%',
    },
    {
      value: 'postCount',
      type: 'string',
      title: 'Total Post',
      width: '10%',
    },
    {
      value: 'action',
      actions: ['edit', 'delete'],
      type: 'action',
      title: 'Action',
      width: '10%',
    },
  ];
  constructor(
    private writerService: WriterService,
    private layoutService: LayoutsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllWriter();
  }

  createWriter() {
    const dialogRef = this.dialog.open(FormWriterComponent, {
      disableClose: true,
      height: 'auto',
      width: '1200px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllWriter();
      }
    });
  }

  editWriter(data: any) {
    const dialogRef = this.dialog.open(FormWriterComponent, {
      disableClose: true,
      height: 'auto',
      width: '1200px',
      data: data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllWriter();
      }
    });
  }

  deleteWriter(event: any) {
    this.layoutService.deleteConfirmation().then((result) => {
      if (result.isConfirmed) {
        this.writerService.deleteWriter(event.writer_id).subscribe(() => {
          this.layoutService.deletedConfirmed();
          this.getAllWriter();
        });
      }
    });
  }

  getAllWriter() {
    this.writerService
      .getAllWriter(this.query, this.page, this.limit)
      .subscribe((data) => {
        this.writers = data.object;
        this.writers.map((res) => {
          if (res.summaries) res.summaries = JSON.parse(res.summaries);
        });
        this.rowCount = data.rowCount;
      });
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getAllWriter();
  }
}
