import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JavaComponent } from './java/java.component';
import { ResumeComponent } from './resume/resume.component';
import { UnixComponent } from './unix/unix.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'java', component: JavaComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'unix', component: UnixComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
