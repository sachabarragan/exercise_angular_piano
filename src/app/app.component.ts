import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano';
  colorDo: string;
  colorRe: string;
  colorMi: string;
  colorFa: string;
  colorSol: string;
  colorLa: string;
  colorSi: string;

  constructor(){
    this.colorDo = 'red';
    this.colorRe = 'green';
    this.colorMi = 'yellow'
    this.colorFa = 'pink';
    this.colorSol = 'blue';
    this.colorLa = 'purple';
    this.colorSi = 'cyan';
  }

  soundTheNote(note: number): void{
    const audio = new Audio();
    audio.src = `../assets/sounds/note${note}.wav`;
    audio.load();
    audio.play();
    
  }
}