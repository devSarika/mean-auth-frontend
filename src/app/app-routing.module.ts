import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component'
import { PostComponent } from './post/post.component'

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  { 
    path:'login',
    component:LoginComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'profile/:id',component:ProfileComponent
  },
  {
    path:'',component:PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
