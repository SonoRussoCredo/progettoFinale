import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { DetailsComponent } from './customers/detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './singup/singup.component';
import { UserlistComponent } from './user-list/user-list.component';
import { InvoicesDetailComponent } from './invoices/invoices-detail/invoices-detail.component';
import { InvoicesListComponent } from './invoices/invoices-list/invoices-list.component'
import { CreateComponent } from './customers/create/create.component';
import { InvoiceCreateComponent } from './invoices/invoice-create/invoice-create.component';
import { FattureClienteComponent } from './invoices/fatture-cliente/fatture-cliente.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "user", component: UserlistComponent, canActivate:[AuthGuard]},
  {path: "customer", component: CustomersListComponent, canActivate:[AuthGuard]},
  {path: "customer/create",  component: CreateComponent, canActivate:[AuthGuard]},
  {path: "customer/:id", component: DetailsComponent, canActivate:[AuthGuard]},
  {path: "invoices", component: InvoicesListComponent, canActivate:[AuthGuard]},
  {path: "invoices/create/:id", component: InvoiceCreateComponent, canActivate:[AuthGuard]},
  {path: "invoices/customer/:id", component: FattureClienteComponent, canActivate:[AuthGuard]},
  {path: "invoices/:id", component: InvoicesDetailComponent, canActivate:[AuthGuard]},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }