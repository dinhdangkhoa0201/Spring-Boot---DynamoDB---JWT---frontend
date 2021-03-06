import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignInComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { WindowService } from './_services/window.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { ToastrModule } from 'ngx-toastr';

<<<<<<< HEAD
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {DialogChangeInformationComponent} from './dialog/dialog-change-information/dialog-change-information.component';
import {DialogChangePasswordComponent} from './dialog/dialog-change-password/dialog-change-password.component';
import {DialogUserInformationComponent} from './dialog/dialog-user-information/dialog-user-information.component';
import {DialogAddUserComponent} from './dialog/dialog-add-user/dialog-add-user.component';
import {RegisterByPhoneComponent} from './register/register-by-phone/register-by-phone.component';
import {RegisterByEmailComponent} from './register/register-by-email/register-by-email.component';
import {UniqueEmailValidatorDirective} from './_services/unique-email-validator.directive';
import {UniquePhoneValidatorDirective} from './_services/unique-phone-validator.directive';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {HeaderComponent} from './header/header.component';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {SidenavService} from './_services/sidenav.service';
import {ContactComponent} from './contact/contact.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DialogFriendInformationComponent} from './dialog/dialog-friend-information/dialog-friend-information.component';
import {NotifyRequestAddFriendComponent} from './notify/notify-request-add-friend/notify-request-add-friend.component';
import {NotifyNewMessageComponent} from './notify/notify-new-message/notify-new-message.component';
import {NotifyAcceptedAddFriendComponent} from './notify/notify-accepted-add-friend/notify-accepted-add-friend.component';
import {ChatComponent} from './chat/chat.component';
import {DatePipe} from '@angular/common';
import {NotifyErrorComponent} from './notify/notify-error/notify-error.component';
import {NotifySuccessComponent} from './notify/notify-success/notify-success.component';
import {AuthGuardService, AuthGuardService as AuthGuard} from './_services/auth-guard.service';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {AdminGuardService} from './_services/admin-guard.service';
import {UpdateEmailComponent} from './update/update-email/update-email.component';
import {UpdatePhoneComponent} from './update/update-phone/update-phone.component';
import {AddPhoneComponent} from './update/add-phone/add-phone.component';
import {AddEmailComponent} from './update/add-email/add-email.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {DialogCreateGroupComponent} from './dialog/dialog-create-group/dialog-create-group.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MaterialFileInputModule} from 'ngx-material-file-input';
=======
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DialogChangeInformationComponent } from './dialog/dialog-change-information/dialog-change-information.component';
import { DialogChangePasswordComponent } from './dialog/dialog-change-password/dialog-change-password.component';
import { DialogUserInformationComponent } from './dialog/dialog-user-information/dialog-user-information.component';
import { DialogAddUserComponent } from './dialog/dialog-add-user/dialog-add-user.component';
import { RegisterByPhoneComponent } from './register/register-by-phone/register-by-phone.component';
import { RegisterByEmailComponent } from './register/register-by-email/register-by-email.component';
import { UniqueEmailValidatorDirective } from './_services/unique-email-validator.directive';
import { UniquePhoneValidatorDirective } from './_services/unique-phone-validator.directive';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from './_services/sidenav.service';
import { ContactComponent } from './contact/contact.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogFriendInformationComponent } from './dialog/dialog-friend-information/dialog-friend-information.component';
import { NotifyRequestAddFriendComponent } from './notify/notify-request-add-friend/notify-request-add-friend.component';
import { NotifyNewMessageComponent } from './notify/notify-new-message/notify-new-message.component';
import { NotifyAcceptedAddFriendComponent } from './notify/notify-accepted-add-friend/notify-accepted-add-friend.component';
import { ChatComponent } from './chat/chat.component';
import { DatePipe } from '@angular/common';
import { NotifyErrorComponent } from './notify/notify-error/notify-error.component';
import { NotifySuccessComponent } from './notify/notify-success/notify-success.component';
import { AuthGuardService, AuthGuardService as AuthGuard } from './_services/auth-guard.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminGuardService } from './_services/admin-guard.service';
import { UpdateEmailComponent } from './update/update-email/update-email.component';
import { UpdatePhoneComponent } from './update/update-phone/update-phone.component';
import { AddPhoneComponent } from './update/add-phone/add-phone.component';
import { AddEmailComponent } from './update/add-email/add-email.component';
import { MaterialFileInputModule } from 'ngx-mat-file-input';
>>>>>>> 927f459a086855f1692623bcddae48da400b5cf8

const config = {
  apiKey: environment.configFirebase.apiKey,
  authDomain: environment.configFirebase.authDomain,
  databaseURL: environment.configFirebase.databaseURL,
  projectId: environment.configFirebase.projectId,
  storageBucket: environment.configFirebase.storageBucket,
  messagingSenderId: environment.configFirebase.messagingSenderId,
  appId: environment.configFirebase.appId,
  measurementId: environment.configFirebase.messagingSenderId,
};

function useValue(): any {
  return undefined;
}

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardUserComponent,
    AdminComponent,
    ConfirmDialogComponent,
    DialogChangeInformationComponent,
    DialogChangePasswordComponent,
    DialogUserInformationComponent,
    DialogAddUserComponent,
    RegisterByPhoneComponent,
    RegisterByEmailComponent,
    UniqueEmailValidatorDirective,
    UniquePhoneValidatorDirective,
    HeaderComponent,
    LeftMenuComponent,
    ContactComponent,
    DialogFriendInformationComponent,
    NotifyRequestAddFriendComponent,
    NotifyNewMessageComponent,
    NotifyAcceptedAddFriendComponent,
    ChatComponent,
    NotifyErrorComponent,
    NotifySuccessComponent,
    ForgotPasswordComponent,
    UpdateEmailComponent,
    UpdatePhoneComponent,
    AddPhoneComponent,
    AddEmailComponent,
    DialogCreateGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    MatTabsModule,
    MatStepperModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatTooltipModule,
    MatBadgeModule,
    MatChipsModule,
    ToastrModule.forRoot(),
<<<<<<< HEAD
    ScrollingModule,
    MatAutocompleteModule,
=======
>>>>>>> 927f459a086855f1692623bcddae48da400b5cf8
    MaterialFileInputModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatBadgeModule,
    MatChipsModule
  ],
  providers: [WindowService, SidenavService, DatePipe, AuthGuard, AuthGuardService, AdminGuardService
  ],
  bootstrap: [AppComponent],

})

export class AppModule {
}
