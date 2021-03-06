/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <!--<span>-->
        <!--<a uiSref=" ['./'] ">-->
          <!--Index-->
        <!--</a>-->
      <!--</span>-->
      |
      <span>
        <a uiSref="app.home">
          Home
        </a>
      </span>
      |
      <!--<span>-->
        <!--<a uiSref=" ['./detail'] ">-->
          <!--Detail-->
        <!--</a>-->
      <!--</span>-->
      |
      <span>
        <a uiSref="app.about">
          About
        </a>
      </span>
    </nav>

    <main>
      <!--<router-outlet></router-outlet>-->
      <ui-view></ui-view>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="logo" width="60px">
        </a>
      </div>
    </footer>
  `
})
export class AppComponent {
  logo = 'assets/img/angular-logo.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
