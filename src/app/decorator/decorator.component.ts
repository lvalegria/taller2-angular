import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent implements OnInit {
  
  @Input() propiedadHijo="tea";
  @Output() eventoMenu= new EventEmitter<string>();
  constructor() { }


  ngOnInit(): void {
  }

  metodoMenu(value:string){
    this.eventoMenu.emit(value);
  }

}
