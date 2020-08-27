import { Component,  OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reference-code',
  templateUrl: './reference-code.component.html',
  styleUrls: ['./reference-code.component.scss']
})
export class ReferenceCodeComponent implements OnInit {
  constructor() { }
  hello ="Hello World from Angular";

  displayLanguage(){
    console.log(`TypeScript in use for Angular`)
  }

  //Sample Event Displayer
  displayEvent(event){

    console.log(`Angular Event ${event.target}`)
  }

  //Make dummy data goin to ust the ng 4 to loop over this ditc
  foods = [{
    "item1":'burgers',
    'item2': 'hot dogs',
    'item3': 'pizza'
  },
  {
  "item1":'tacos',
  'item2': 'wine',
  'item3': 'chocolate'
  }
]
  name = "Joel";  //name will not display for Cindy

  //two-way data binding
  @Input() size:number | string;
  @Output() sizeChange = new EventEmitter<number>()

  decrement(){
    this.resize(-1);

  }

  increment(){
    this.resize(+1);
  }
  // thsai is not working --Math.min(40,Math.max(8,+this.size + delta))//Can onlu push buttons once;
  resize(delta: number){
    this.size = 20 + delta;
    this.sizeChange.emit(this.size)
  }
  ngOnInit(): void {
  }

}
