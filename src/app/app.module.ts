import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { DevCardComponent } from './components/dev-card/dev-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { IndexComponent } from './pages/index/index.component';
import { WebDevComponent } from './pages/courses/web-dev/web-dev.component';
import { LinuxAdmComponent } from './pages/courses/linux-adm/linux-adm.component';
import { MobileDevComponent } from './pages/courses/mobile-dev/mobile-dev.component';
import { SoftwareDevComponent } from './pages/courses/software-dev/software-dev.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    HeaderComponent,
    DevCardComponent,
    FooterComponent,
    CourseCardComponent,
    CoursesComponent,
    IndexComponent,
    WebDevComponent,
    LinuxAdmComponent,
    MobileDevComponent,
    SoftwareDevComponent,
    AboutComponent,
    ContactComponent,
    SignUpComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
