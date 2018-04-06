import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { ReduxConfigModule } from '../store'

import { MemoryComponent } from './memory.component'
import { AppComponent } from './../app/app.component/app.component';
import { HomepageComponent } from 'app/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { InfoComponent } from './dashboard/info.component'
import { ChessboardComponent } from './chessboard/chessboard.component'
import { CardComponent } from './chessboard/card.component'
import { StatusComponent } from './status/status.component'
import { AppRoutingModule } from 'app/app-routing.module'

import { GameActions } from '../store/action'
import { ApiService } from '../api.service'
import { SelectService } from './../select.services';

@NgModule({
  imports: [
    BrowserModule,
    ReduxConfigModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    MemoryComponent,
    DashboardComponent,
    InfoComponent,
    ChessboardComponent,
    CardComponent,
    StatusComponent,
    HomepageComponent,
    AppComponent
  ],
  providers: [GameActions, ApiService, SelectService],
  bootstrap: [AppComponent]
})
export class MemoryModule { }
