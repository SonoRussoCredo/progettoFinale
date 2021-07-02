import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {

  form:any;
  id:any;

  constructor(private router: Router, private route:ActivatedRoute, private api:ApiService, private fb: FormBuilder) { }

  inizializzaForm(){
    this.form = this.fb.group({
    data:[''] ,
    numero: [''],
          anno: [''],
          importo:[''],
          stato: this.fb.group({
              id:['1'],
              nome:['PAGATA']
          }),
          cliente: this.fb.group({
            id:[this.id]    //passato l'id cliente
          })
      })
    }

    Crea(form){
      form.value.stato.id = form.value.stato.nome === 'PAGATA' ? '1' : '2';

      this.api.newInvoice(form.value).subscribe(   //.value e non tutto il form
        data => {
        console.log(data);
        this.router.navigate(['invoices/customer/' + this.id]);
      })

    }
    ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      this.id = Number(routeParams.get('id'));
      this.inizializzaForm();
    }

}