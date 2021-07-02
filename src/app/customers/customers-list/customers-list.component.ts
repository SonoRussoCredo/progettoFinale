import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers:any [] =[]
  page = 1;
  pageSize = 10;
  collectionSize = 0;
  constructor(private api: ApiService, private router: Router) { }
  getAllCustomer() {
    return this.api.getCustomersList(this.page -1, this.pageSize).subscribe((response) => {
      console.log(response);
      this.customers = response.content;
      this.collectionSize = response.totalElements;
    })
  }
  selectPage(page:string) {
    this.page = parseInt(page, this.pageSize)  || 1 ;
    this.getAllCustomer()
  }
  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }
  goToDetail(id:any){
    this.router.navigate(['customer/', id])
  }
  nuovo(){
    this.router.navigate(['customer/create'])
  }
  goToFatture(id:any){
    this.router.navigate(['/invoices/customer/'+id])
  }
  ngOnInit(): void {
    this.getAllCustomer()
  }
}
