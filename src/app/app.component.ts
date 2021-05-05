import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  private favIcon: HTMLLinkElement | null = document.querySelector('#favIcon');

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(environment.pageHeader);
    if(this.favIcon) {
      this.favIcon.href = environment.pageHeaderIcon;
    } else {
      console.warn('Cannot set favicon.');
    }
  }

}
