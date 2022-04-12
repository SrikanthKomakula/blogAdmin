import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './admin/layout/navbar/navbar.component';
import { ContentComponent } from './admin/content/content.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { DashboardHomeComponent } from './admin/dashboard-home/dashboard-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertComponent } from './_components/alert/alert.component';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SidebarComponent } from './admin/layout/sidebar/sidebar.component';
import { AddPostComponent } from './admin/post/add-post/add-post.component';
import { PostListComponent } from './admin/post/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    LoginComponent,
    RegisterComponent,
    NotFountComponent,
    DashboardHomeComponent,
    AlertComponent,
    SpinnerComponent,
    AddPostComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
