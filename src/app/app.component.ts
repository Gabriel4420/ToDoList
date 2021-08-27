import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public task = "";

  public inputValue = document.querySelector('input');


  public items = ['item 1','item 2','item 3','item 4'];

  addTask(){
    
    this.items.push(this.task)
  }

  removeTask(item:any){
    this.items.splice( this.items.indexOf(item), 1)
  }
}
