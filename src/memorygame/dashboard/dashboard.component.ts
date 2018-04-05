import { Component, OnInit } from '@angular/core'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @select() remains$: Observable<number>
  @select() highestSpeed$: Observable<number>
  capacity = '';
  ngOnInit() {
    this.capacity = '70%';
  }
}
