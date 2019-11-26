import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EditorComponent } from './editor/editor.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { CompilationService } from './compilation.service';
import { ArticlesComponent } from './articles/articles.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { ProblemComponent } from './problem/problem.component';
import { ProblemsComponent } from './problems/problems.component';
import { AllProblemsComponent } from './all-problems/all-problems.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    EditorComponent,
    ProfileComponent,
    ArticlesComponent,
    TicTacToeComponent,
    ProblemComponent,
    ProblemsComponent,
    AllProblemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AceEditorModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      // {
      //   path:'admin',
      //   component:AdminComponent,
      //   canActivate: [AuthGuard]
      // },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'ide',
        component: EditorComponent,
        canActivate: [AuthGuardService]
     },
     {
      path: 'profile',
      component: ProfileComponent,
      canActivate: [AuthGuardService]
     },
     {
      path: 'articles',
      component: ArticlesComponent,
      canActivate: [AuthGuardService]
     },
     {
      path: 'problem',
      component: ProblemComponent,
      canActivate: [AuthGuardService]
     },
     {
      path: 'problems',
      component: ProblemsComponent,
      canActivate: [AuthGuardService]
     },
     {
      path: 'game',
      component: TicTacToeComponent,
     },
      {
        path: '',
        component: HomeComponent
      },
    ])
  ],
  providers: [AuthenticationService, AuthGuardService, CompilationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
