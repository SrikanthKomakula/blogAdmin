import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './admin/dashboard-home/dashboard-home.component';
import { AddPostComponent } from './admin/post/add-post/add-post.component';
import { PostListComponent } from './admin/post/post-list/post-list.component';
import { LoginComponent } from './login/login.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardGuard } from './_helpers/auth-guard.guard';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'admin', redirectTo: '/admin/dashboard', pathMatch: 'full'},
  // {path: 'admin', canActivate: [AuthGuardGuard], children: [
  {path: 'admin', children: [
    {path: 'dashboard', component: DashboardHomeComponent},
    {path: 'add-post', component: AddPostComponent},
    {path: 'post-list', component: PostListComponent},
  ]},
  {path: '**', component:NotFountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
