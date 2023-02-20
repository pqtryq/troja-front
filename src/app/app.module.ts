import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from  './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { InputMaskModule} from "primeng/inputmask";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ButtonModule} from "primeng/button";
import { GoogleMapsModule } from '@angular/google-maps'

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CatalogComponent } from './catalog/catalog.component';
import { PackageComponent } from './package/package.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({

  declarations: [
    CatalogComponent,
    IndexComponent,
    AppComponent,
    PackageComponent,
    DialogComponent,
  ],
  imports: [
      BrowserModule,
      MessagesModule,
      MessageModule,
      AppRoutingModule,
      HttpClientModule,
      DialogModule,
      BrowserAnimationsModule,
      InputMaskModule,
      FormsModule,
      ReactiveFormsModule,
      GoogleMapsModule,
      ButtonModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }



