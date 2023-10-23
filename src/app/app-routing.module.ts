import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { IndexComponent } from './pages/index/index.component';
import { SoftwareDevComponent } from './pages/courses/software-dev/software-dev.component';
import { WebDevComponent } from './pages/courses/web-dev/web-dev.component';
import { LinuxAdmComponent } from './pages/courses/linux-adm/linux-adm.component';
import { MobileDevComponent } from './pages/courses/mobile-dev/mobile-dev.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { DevelopersComponent } from './pages/developers/developers.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "courses", component: CoursesComponent},
  {path: "software-dev", component: SoftwareDevComponent},
  {path: "web-dev", component: WebDevComponent},
  {path: "linux-adm", component: LinuxAdmComponent},
  {path: "mobile-dev", component: MobileDevComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "sign-up", component: SignUpComponent},
  {path: "sign-in", component: SignInComponent},
  {path: "developers", component: DevelopersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
