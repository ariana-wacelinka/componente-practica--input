import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent implements OnChanges {
  figura = "";
  @Input() data= "";

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.figura = changes['data'].currentValue;
    }
  }
  
  consola() {
    alert(this.figura);
  }
}