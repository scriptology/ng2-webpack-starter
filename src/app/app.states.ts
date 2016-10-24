/**
 * Created by asolovyev on 24/10/16.
 */

import {AppComponent} from "./app.component";
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import {Ng2StateDeclaration, loadNgModule} from "ui-router-ng2";

/** The top level state(s) */
export let MAIN_STATES: Ng2StateDeclaration[] = [
    // The top-level app state.
    // This state fills the root <ui-view></ui-view> (defined in index.html) with the AppComponent
    { name: 'app', component: AppComponent },

    // This is the Future State for lazy loading the BazModule
    { name: 'app.home', url: '/home', component: HomeComponent },
    { name: 'app.about', url: '/about', component: AboutComponent }
    // { name: 'app.home', url: '/home', lazyLoad: loadNgModule('../src/app/home') },
    // { name: 'app.about', url: '/about', lazyLoad: loadNgModule('../src/app/about') }
];