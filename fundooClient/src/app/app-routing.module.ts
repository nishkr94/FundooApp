import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LabelComponent } from './components/label/label.component';
import { AuthGuard } from './services/auth.guard';


@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: '',
          component: AddnoteComponent
        },
        {
          path: 'addNote',
          component: AddnoteComponent,
        },
        {
          path: 'reminders',
          component: RemindersComponent,
        },
        {
          path: 'archive',
          component: ArchiveComponent,
        },
        {
          path: 'trash',
          component: TrashComponent,
        },
        {
          path: 'label',
          component: LabelComponent,
        }
      ]
    },
    {
      path: 'resetPassword',
      component: ResetpasswordComponent
    },
    {
      path: 'forgotPassword',
      component: ForgotpasswordComponent
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
