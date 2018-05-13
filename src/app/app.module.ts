import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToggleViewService } from './services/toggleview.service';

import { AppComponent } from './app.component';
import { Year2018Component } from './components/year2018/year2018.component';
import { Year2019Component } from './components/year2019/year2019.component';
import { Year2020Component } from './components/year2020/year2020.component';
import { StartComponent } from './components/start/start.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import { ApptioComponent } from './components/apptio/apptio.component';
import { Mp2019Component } from './components/mp2019/mp2019.component';
import { Mp2020Component } from './components/mp2020/mp2020.component';
import { Bpc11Component } from './components/bpc11/bpc11.component';
import { TpiComponent } from './components/tpi/tpi.component';
import { Ppm2019Component } from './components/ppm2019/ppm2019.component';
import { Ppm2020Component } from './components/ppm2020/ppm2020.component';
import { ToggleDisplayService } from './services/toggle-display.service';
import { Matrix1Component } from './components/matrix1/matrix1.component';

const appRoutes: Routes = [
  {path: '', component: StartComponent},
  {path: 'year2018', component: Year2018Component},
  {path: 'year2019', component: Year2019Component},
  {path: 'year2020', component: Year2020Component},
  {path: 'mp2019', component: Mp2019Component},
  {path: 'mp2020', component: Mp2020Component},
  {path: 'tpi', component: TpiComponent},
  {path: 'apptio', component: ApptioComponent},
  {path: 'matrix1', component: Matrix1Component},
  {path: 'bpc11', component: Bpc11Component},
  {path: 'ppm2019', component: Ppm2019Component},
  {path: 'ppm2020', component: Ppm2020Component}

];

@NgModule({
  declarations: [
    AppComponent,
    Year2018Component,
    Year2019Component,
    Year2020Component,
    StartComponent,
    ArrowComponent,
    ApptioComponent,
    Mp2019Component,
    Mp2020Component,
    Bpc11Component,
    TpiComponent,
    Ppm2019Component,
    Ppm2020Component,
    Matrix1Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ToggleViewService,
    ToggleDisplayService
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
