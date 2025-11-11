import { Component } from '@angular/core';
import { SERTIFIKAT_LIST } from '../program/program.collection';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss'],
})
export class CertificationComponent {
  coursesList = structuredClone(SERTIFIKAT_LIST);
  openSertif(url: string) {
    window.open(url, '_blank');
  }
}
