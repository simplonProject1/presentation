import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToggleViewService } from './services/toggleview.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Year2018Component } from './components/year2018/year2018.component';
import { Year2019Component } from './components/year2019/year2019.component';
import { Year2020Component } from './components/year2020/year2020.component';
import { StartComponent } from './components/start/start.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { ModalComponent } from './components/modal/modal.component';

const appRoutes: Routes = [
  {path: '', component: StartComponent},
  {path: 'year2018', component: Year2018Component},
  {path: 'year2019', component: Year2019Component},
  {path: 'year2020', component: Year2020Component},
  {path: 'modal', component: ModalComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    Year2018Component,
    Year2019Component,
    Year2020Component,
    StartComponent,
    ArrowComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [
    ToggleViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }