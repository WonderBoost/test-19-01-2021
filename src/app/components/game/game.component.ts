import { Component, OnInit } from '@angular/core';
import { GameStateService } from 'src/app/services/game-state.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private game: GameStateService) {}

  ngOnInit(): void {
    this.game.state.subscribe(state => {
      console.log(state)
    })
    this.game.generateSimon();
  }

  playerGuess(e: string) {
    this.game.playerGuess(e);
  }
}
