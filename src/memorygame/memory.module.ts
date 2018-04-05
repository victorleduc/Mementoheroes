import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { ReduxConfigModule } from '../store'

import { MemoryComponent } from './memory.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { InfoComponent } from './dashboard/info.component'
import { ChessboardComponent } from './chessboard/chessboard.component'
import { CardComponent } from './chessboard/card.component'
import { StatusComponent } from './status/status.component'

import { GameActions } from '../store/action'
import { ApiService } from '../api.service'

@NgModule({
  imports: [BrowserModule, ReduxConfigModule, HttpClientModule],
  declarations: [
    MemoryComponent,
    DashboardComponent,
    InfoComponent,
    ChessboardComponent,
    CardComponent,
    StatusComponent
  ],
  providers: [GameActions, ApiService],
  bootstrap: [MemoryComponent]
})
export class MemoryModule { }
