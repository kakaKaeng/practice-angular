import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentTime?: Date;
  timeZoneName?: string;

  constructor() {
  }

  ngOnInit() {
    this.timeZoneName = this.onGetTimeZoneName();
    this.onGetLocalTime$().subscribe(time => {
      this.currentTime = time;
    });
  }

  onGetLocalTime$(): Observable<Date> {
    return interval(1000).pipe(
      map(() => new Date())
    );
  }

  onGetTimeZoneName(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

}
