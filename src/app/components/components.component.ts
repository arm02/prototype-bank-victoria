import { Component, OnInit } from '@angular/core';
import { StateService } from './services/state.service';
import { WriterResponseCollection } from './pages/writer/write.collection';
import { MatDialog } from '@angular/material/dialog';
import { FormWriterComponent } from './pages/writer/form-writer/form-writer.component';
import { FeedbackFormComponent } from './feedback-form.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  showFeedback = true;
  writerProfileChecker = false;
  constructor(private stateService: StateService, private dialog: MatDialog) {}
  ngOnInit() {
    if (this.writerProfileChecker) this.checkProfileWriter();
  }

  checkProfileWriter() {
    const writeProfile: WriterResponseCollection =
      this.stateService.getWriterCheckProfile();
    if (
      writeProfile?.experience === null ||
      writeProfile?.expertise === null ||
      writeProfile?.linkedin === null ||
      writeProfile?.summaries === null ||
      writeProfile?.role === null
    ) {
      this.editWriterForm(writeProfile);
    }
  }

  editWriterForm(data: any) {
    const dialogRef = this.dialog.open(FormWriterComponent, {
      disableClose: true,
      height: 'auto',
      width: '850px',
      data: {
        ...data,
        from: 'login',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  feedbackForm() {
    const dialogRef = this.dialog.open(FeedbackFormComponent, {
      disableClose: true,
      height: 'auto',
      width: '850px',
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
