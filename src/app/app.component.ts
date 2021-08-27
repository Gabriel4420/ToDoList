import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public task = "";

  public inputValue = document.querySelector('input');


  public items = [''];

  addTask(){

    this.items.push(this.task)
  }

  removeTask(item:any){
    this.items.splice( this.items.indexOf(item), 1)
  }
}
