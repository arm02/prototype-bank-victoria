import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutosaveService {
  private autosaveIntervals: { [key: string]: any } = {};
  private readonly EXPIRY_TIME = 24 * 60 * 60 * 1000; // 24 jam

  /**
   * Mulai autosave
   */
  startAutoSave(key: string, dataRef: any, intervalMs = 5000): void {
    const existing = this.getRaw(key);

    // kalau sudah expired → hapus & buat baru
    if (existing && this.isExpired(existing.savedAt)) {
      this.clear(key);
      console.log('Expired autosave removed');
      this.createNewAutosave(key, dataRef, intervalMs);
      return;
    }

    // kalau belum ada → buat baru
    if (!existing) {
      this.createNewAutosave(key, dataRef, intervalMs);
      return;
    }

    // kalau sudah ada & belum expired → tetap jalankan autosave (tanpa ubah savedAt)
    console.log('Autosave exists, continuing interval updates');
    this.startInterval(key, dataRef, intervalMs);
  }

  private createNewAutosave(
    key: string,
    dataRef: any,
    intervalMs: number
  ): void {
    const payload = {
      data: dataRef,
      savedAt: Date.now(),
    };
    localStorage.setItem(key, JSON.stringify(payload));
    this.startInterval(key, dataRef, intervalMs);
    console.log('New autosave started');
  }

  private startInterval(key: string, dataRef: any, intervalMs: number): void {
    this.stopAutoSave(key);
    this.autosaveIntervals[key] = setInterval(() => {
      this.updateDataOnly(key, dataRef);
    }, intervalMs);
  }

  stopAutoSave(key: string): void {
    if (this.autosaveIntervals[key]) {
      clearInterval(this.autosaveIntervals[key]);
      delete this.autosaveIntervals[key];
    }
  }

  private updateDataOnly(key: string, data: any): void {
    const raw = this.getRaw(key);
    if (!raw) return;
    raw.data = data; // hanya update data, bukan savedAt
    localStorage.setItem(key, JSON.stringify(raw));
  }

  load<T extends object>(key: string, defaultValue: T): T {
    const raw = this.getRaw(key);
    if (!raw) return defaultValue;

    if (this.isExpired(raw.savedAt)) {
      this.clear(key);
      return defaultValue;
    }

    return Object.assign(defaultValue, raw.data);
  }

  private getRaw(key: string): { data: any; savedAt: number } | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  private isExpired(savedAt: number): boolean {
    return Date.now() - savedAt > this.EXPIRY_TIME;
  }

  clear(key: string): void {
    localStorage.removeItem(key);
  }
}
