import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pi-mapping';
  showScroll = false;
  year = 0;

  constructor() {
  	window.onscroll = () => {
  		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  			this.showScroll = true;
  		} else {
  			this.showScroll = false;
  		}
  	};
    this.year = (new Date()).getFullYear();
  }

  goToTop() {
  	document.body.scrollTop = 0; // For Safari
  	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
