import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

/************ PAGES ************/ 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreatePage } from '../pages/CreatePages/create/create';
import { ReadPage } from '../pages/ReadPages/read/read';
import { DisplayItemsPage } from '../pages/ReadPages/display-items/display-items';
import { UserPage } from '../pages/user/user';

/************ PROVIDERS ************/ 
import { CreateProvider } from '../providers/create/create';
import { ReadProvider } from '../providers/read/read';
import { UpdateProvider } from '../providers/update/update';
import { DeleteProvider } from '../providers/delete/delete';
import { HttpsRequestInterceptor } from './interceptor';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreatePage,
    ReadPage,
    DisplayItemsPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreatePage,
    ReadPage,
    DisplayItemsPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true},
    CreateProvider,
    ReadProvider,
    UpdateProvider,
    DeleteProvider
  ]
})
export class AppModule { }
