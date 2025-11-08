import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LayoutsService } from '../layouts.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  isLoading: Subject<boolean> = this.layoutService.isLoading;
  constructor(private layoutService: LayoutsService) { }

  ngOnInit() {
  }

}
