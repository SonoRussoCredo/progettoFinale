import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './customers/detail/detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './customers/create/create.component';
import { CommonModule } from '@angular/common';
import { EpicInterceptor } from './services/epic.interceptor'
import { HeaderComponent } from './header/header.component';
import { UserlistComponent} from './user-list/user-list.component';
import { SignupComponent } from './singup/singup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { FooterComponent } from './footer/footer.component';
import { InvoicesListComponent } from './invoices/invoices-list/invoices-list.component';
import { InvoicesDetailComponent } from './invoices/invoices-detail/invoices-detail.component';
import { InvoiceCreateComponent } from './invoices/invoice-create/invoice-create.component';
import { FattureClienteComponent, NgbdSortableHeader } from './invoices/fatture-cliente/fatture-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CreateComponent,
    HeaderComponent,
    UserlistComponent,
    CustomersListComponent,
    FooterComponent,
    InvoicesListComponent,
    InvoicesDetailComponent,
    InvoiceCreateComponent,
    FattureClienteComponent,
    NgbdSortableHeader
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EpicInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }