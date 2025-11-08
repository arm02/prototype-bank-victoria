import { Component, Inject, OnInit } from '@angular/core';
import { CreateChannelRequest } from '../channels.collection';
import { ChannelsService } from '../channels.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-channels',
  templateUrl: './form-channels.component.html',
  styleUrls: ['./form-channels.component.scss'],
})
export class FormChannelsComponent implements OnInit {
  channel: CreateChannelRequest = new CreateChannelRequest();
  constructor(
    private dialogRef: MatDialogRef<FormChannelsComponent>,
    private channelService: ChannelsService,
    private layoutService: LayoutsService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    if (data) {
      this.channel = data;
    }
  }

  ngOnInit() {}

  onSaved() {
    if (this.data?.page_id) {
      this.updateChannel();
    } else {
      this.createChannel();
    }
  }

  updateChannel() {
    this.channelService
      .updateChannel(this.channel, this.channel.page_id)
      .subscribe((res) => {
        if (res) {
          this.layoutService.successMessage(
            'Updated!',
            'Your channel has been update.'
          );
          this.dialogRef.close(true);
        }
      });
  }

  createChannel() {
    this.channelService.createChannel(this.channel).subscribe((res) => {
      if (res) {
        this.layoutService.successMessage(
          'Created!',
          'Your channel has been create.'
        );
        this.dialogRef.close(true);
      }
    });
  }
}
