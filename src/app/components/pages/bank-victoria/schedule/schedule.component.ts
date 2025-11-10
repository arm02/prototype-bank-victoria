import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  // Definisikan opsi konfigurasi kalender
  calendarOptions: CalendarOptions = {
    // 1. Daftarkan plugins yang digunakan
    plugins: [dayGridPlugin, interactionPlugin],

    // 2. Set header toolbar
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay' // Tampilan bulan, minggu, hari
    },

    // 3. Set tampilan awal
    initialView: 'dayGridMonth',

    // 4. Data Event (Contoh data statis)
    // src/app/calendar/calendar.component.ts

    events: [
      {
        // Event 1: Menggunakan waktu start dan end
        title: 'HTML Fundametal', // Ini akan menjadi event-title
        start: '2025-11-11T06:00:00', // Tanggal dan Waktu Mulai
        end: '2025-11-11T14:00:00',   // Tanggal dan Waktu Selesai (02:00 PM = 14:00)
        backgroundColor: '#5DC6E7',
        borderColor: '#5DC6E7',
        color: '#5DC6E7'
      },
      {
        // Event 2: Full-day event (tanpa waktu spesifik, hanya tanggal)
        title: 'Presentasi',
        date: '2025-11-10T10:00:00', // Gunakan date atau start untuk full-day
        color: '#D35DE7'
      },
      {
        // Event 3: Multi-day event (tetap bagus)
        title: 'Workshop FullCalendar',
        start: '2025-11-20',
        end: '2025-11-22',
        color: '#9E1212'
      }
    ] as EventInput[],

    displayEventTime: true,
    displayEventEnd: true,
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: false,
      hour12: false,
    },

    // 5. Aktifkan Interaksi Klik (Seperti yang kita bahas)
    eventClick: this.handleEventClick.bind(this)
  };
  // Metode untuk menangani klik pada event
  handleEventClick(info: any) {
    alert(`Event: ${info.event.title}\nWaktu: ${info.event.start}`);
    // Di sini Anda bisa menambahkan logika untuk membuka Modal atau navigasi
  }

  getEventTimeFormat(event: any): 'time' | 'dateRange' | null {
    // FullCalendar menyediakan objek event yang mungkin tidak memiliki start/end jika itu full-day tanpa waktu
    if (!event.start) {
      return null; // Tidak ada waktu untuk ditampilkan
    }

    const startDate = event.start; // Ini adalah objek Date
    const endDate = event.end;     // Ini adalah objek Date atau null/undefined

    // Jika tidak ada end date, kita hanya tampilkan waktu saja (atau tidak sama sekali jika full-day)
    if (!endDate) {
      return 'time';
    }

    // Cek apakah tanggal (YYYY-MM-DD) start dan end berbeda
    const startDay = startDate.toDateString();
    const endDay = endDate.toDateString();

    if (startDay !== endDay) {
      // Jika tanggal berbeda (Multi-day event)
      return 'dateRange';
    } else {
      if (startDay && endDay) {
        // Jika tanggal sama (Single-day event, tampilkan waktu)
        return 'time';
      } else {
        return null;
      }
    }
  }
}
