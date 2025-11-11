import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Subject, takeUntil } from 'rxjs';
import idLocale from '@fullcalendar/core/locales/id';
import { MatDialog } from '@angular/material/dialog';
import { DetailScheduleComponent } from './dialog/detail-schedule/detail-schedule.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  isMobile = false;
  desktopToolbar = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  };

  mobileToolbar = {
    left: 'prev,next',
    center: 'title',
    right: 'dayGridMonth,timeGridDay,listWeek'
  };

  calendarOptions: CalendarOptions = {
    locale: idLocale,
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    views: {
      timeGridWeek: {
        buttonText: 'Minggu'
      },
      timeGridDay: {
        buttonText: 'Hari'
      },
      listWeek: {
        buttonText: 'List'
      }
    },
    initialView: 'dayGridMonth',
    events: [
      {
        title: 'HTML Fundametal',
        start: '2025-11-11T06:00:00',
        end: '2025-11-11T14:00:00',
        backgroundColor: '#5DC6E7',
        borderColor: '#5DC6E7',
        color: '#5DC6E7'
      },
      {
        title: 'Presentasi',
        date: '2025-11-10', // Jika hanya tanggal, jangan sertakan waktu jika intended full-day
        color: '#D35DE7'
      },
      {
        title: 'Workshop FullCalendar',
        start: '2025-11-20',
        end: '2025-11-22',
        color: '#9E1212'
      }
    ] as EventInput[],
    displayEventTime: true,
    displayEventEnd: true,
    eventTimeFormat: {
      hour: '2-digit', // Menggunakan '2-digit' lebih konsisten dengan HH
      minute: '2-digit',
      meridiem: false,
      hour12: false, // Format 24 Jam
    },
    eventClick: this.handleEventClick.bind(this)
  };

  private destroy$ = new Subject<void>();
  constructor(private breakpointObserver: BreakpointObserver, private dialog: MatDialog, private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.XSmall]) // Anda bisa menggunakan 'max-width: 768px' jika mau
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.isMobile = result.matches;

        // Perbarui headerToolbar di calendarOptions
        this.calendarOptions = {
          ...this.calendarOptions, // Pertahankan semua opsi lainnya
          headerToolbar: this.isMobile ? this.mobileToolbar : this.desktopToolbar,
          contentHeight: this.isMobile ? 'auto' : undefined,
        };
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleEventClick(info: any) {
    this.openDetailDialog();
  }

  getEventTimeFormat(event: any): 'time' | 'dateRange' | null {
    if (!event.start) {
      return null; // Tidak ada waktu untuk ditampilkan
    }

    const startDate = event.start; // Ini adalah objek Date
    const endDate = event.end;     // Ini adalah objek Date atau null/undefined
    if (!endDate) {
      return 'time';
    }
    const startDay = startDate.toDateString();
    const endDay = endDate.toDateString();

    if (startDay !== endDay) {
      return 'dateRange';
    } else {
      if (startDay && endDay) {
        return 'time';
      } else {
        return null;
      }
    }
  }

  openDetailDialog(): void {
    if (this.isMobile) {
      this.bottomSheet.open(DetailScheduleComponent, {
      });
    } else {

      const dialogRef = this.dialog.open(DetailScheduleComponent, {
        width: '500px',
      });
      dialogRef.afterClosed().subscribe((result) => { });
    }
  }
}
