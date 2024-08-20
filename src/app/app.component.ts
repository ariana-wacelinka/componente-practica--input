import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonComponent } from "./boton/boton.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  parentData = 'rectangulo';
  
  elipse () {
    this.parentData = "elipse";
  }
  rectangulo () {
    this.parentData = "rectangulo";
  }
  hexagono () {
    this.parentData = "hexagono";
  }
}
