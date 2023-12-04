import { Component } from '@angular/core';
import { AlertifyService } from 'src/app/service/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private alertify: AlertifyService) { }

  loggedinUser!: string | null;

  loggedin() {
    this.loggedinUser = localStorage.getItem('token');
    return localStorage.getItem('token');
    // return this.loggedinUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.alertify.success("You are logged out !")
  }

  // isMenuOpen = false;

  // toggleMenu(): void {
  //   this.isMenuOpen = !this.isMenuOpen;
  //   const menu = document.querySelector('.menu');
  //   menu?.classList.toggle('active', this.isMenuOpen);
  // }
}
