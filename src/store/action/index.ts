import { Injectable, OnInit } from '@angular/core'
import { NgRedux } from '@angular-redux/store'

import { SelectService } from '../../select.services';

import { isEmpty } from '../../helper/object'
import { IState, STATUS, ICard } from '../interface'

@Injectable()
export class GameActions {
  constructor(private ngRedux: NgRedux<IState>, private select: SelectService) { }

  static RESET = 'RESET'
  static UPDATE_STATUS = 'UPDATE_STATUS'
  static UPDATE_LAST_SELECTED_CARD = 'UPDATE_LAST_SELECTED_CARD'
  static UPDATE_CARD_FLIPPED = 'UPDATE_CARD_FLIPPED'
  static UPDATE_REMAINS = 'UPDATE_REMAINS'
  static UPDATE_ELAPSED = 'UPDATE_ELAPSED'
  static UPDATE_HIGHESTSPEED = 'UPDATE_HIGHESTSPEED'

  private timerId: any
  private turn = 0

  ngOnInit() {
    this.turn = 1;
  }

  reset(): void {
    this.ngRedux.dispatch({ type: GameActions.RESET })
  }

  updateStatus(status: STATUS): void {
    this.ngRedux.dispatch({ type: GameActions.UPDATE_STATUS, payload: status })
    if (status === STATUS.PLAYING) {
      this.timerId = setInterval(() => {
        this.ngRedux.dispatch({
          type: GameActions.UPDATE_ELAPSED,
          payload: +this.ngRedux.getState().elapsedMs + 1
        })
      }, 1000)
    } else if (status === STATUS.PASS) {
      clearInterval(this.timerId)
      this.ngRedux.dispatch({
        type: GameActions.UPDATE_HIGHESTSPEED,
        payload: this.ngRedux.getState().elapsedMs
      })
    }
  }

  updateLastSelectedCard(card: ICard): void {
    this.ngRedux.dispatch({
      type: GameActions.UPDATE_LAST_SELECTED_CARD,
      payload: card
    })
  }

  updateCardFlipped(card: ICard): void {
    this.ngRedux.dispatch({
      type: GameActions.UPDATE_CARD_FLIPPED,
      payload: card
    })
  }

  match(): void {
    this.ngRedux.dispatch({
      type: GameActions.UPDATE_REMAINS,
      payload: +this.ngRedux.getState().remains - 1
    })
  }

  flipCard(card: ICard): any {

    const state = this.ngRedux.getState()
    this.updateCardFlipped(card)
    if (state.status === STATUS.READY) {
      this.updateStatus(STATUS.PLAYING)
    }
    if (isEmpty(state.lastSelectedCard)) {
      return this.updateLastSelectedCard(card)
    }
    if (state.lastSelectedCard.name === card.name) {
      console.log(this.turn);
      if (this.turn % 2 === 0) {
        // console.log('identique: ' + this.turn);
        alert('Player 2, play !!!');
        if (this.select.players[0].life > 30) {
          this.select.players[0].life -= 30;
        } else {
          this.select.players[0].life = 0;
          alert('Player 2 WIN !!!');
        }
        // this.turn = this.turn;
      } else {
        // console.log('pas bon1: ' + this.turn)
        alert('Player 1, play !!!');
        if (this.select.players[1].life > 30) {
          this.select.players[1].life -= 30;
        } else {
          this.select.players[1].life = 0;
          alert('Player 1 WIN !!!');
        }
      }
      this.updateLastSelectedCard(null)
      this.match()
      const remains = +state.remains - 1
      return remains || this.updateStatus(STATUS.PASS)
    } else {
      // console.log('pas bon2: ' + this.turn);
      this.turn = this.turn + 1;
    } // console.log('tamere5');
    const lastCard = state.lastSelectedCard
    this.updateLastSelectedCard(null)
    setTimeout(() => {
      this.updateCardFlipped(lastCard)
      this.updateCardFlipped(card)
    }, 1000)
  }
}
