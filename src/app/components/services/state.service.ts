import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WriterResponseCollection } from '../pages/writer/write.collection';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private writerCheckProfile =
    new BehaviorSubject<WriterResponseCollection | null>(null); // Inisialisasi dengan null

  constructor() {}

  setWriterCheckProfile(value: any): void {
    this.writerCheckProfile.next(value);
  }

  getWriterCheckProfile(): any {
    return this.writerCheckProfile.value;
  }
}
