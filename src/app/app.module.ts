import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppComponent } from './app.component';
import { PhonelistComponent } from './phonelist/phonelist.component';
import { PhonedetailComponent } from './phonedetail/phonedetail.component';
import { OrderPipe } from './order.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhonelistComponent,
    PhonedetailComponent,
    OrderPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
