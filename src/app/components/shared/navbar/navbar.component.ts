import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {

  @Output() pageSelected =  new EventEmitter<string>();

  putHomePage() {
    console.log("hola");
    
    this.pageSelected.emit('home');
  }
  putPage1() {
    this.pageSelected.emit('page1');
  }
  putPage2() {
    this.pageSelected.emit('page2');
  }
  putPage3() {
    this.pageSelected.emit('page3');
  }
}
