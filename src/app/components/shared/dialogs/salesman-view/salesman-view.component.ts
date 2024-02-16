import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SalesmanService } from '../../../../core/services/salesman.service';
import { Salesman } from '../../../../core/models/salesman.model.ts';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-salesman-view',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './salesman-view.component.html',
  styleUrl: './salesman-view.component.sass'
})
export class SalesmanViewComponent {
  @Input() show: boolean = false;
  @Input() disabled: boolean = false;
  @Input() edit!: boolean;
  @Input() salesman!: Salesman;
  @Output() showInFalse = new EventEmitter<boolean>();

  public formSalesmans = this.formBuilder.group({
    id: new FormControl({ value: '', disabled: this.edit }, [Validators.required, Validators.minLength(6)],),
    name: new FormControl({ value: '', disabled: this.edit }, [Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z ]')]),
    category: new FormControl({ value: '', disabled: this.edit }, [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z ]')]),
    address: new FormControl({ value: '', disabled: this.edit }, [Validators.required, Validators.minLength(8)]),
    photo: new FormControl({ value: '', disabled: this.edit }, [Validators.required, Validators.minLength(7), Validators.pattern('[a-zA-Z 0-9]')]),
    vehicle: new FormControl({ value: '', disabled: this.edit }, [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]')]),
  });


  constructor(readonly salesmanService: SalesmanService, private formBuilder: FormBuilder) {
  }

  async ngOnInit() {
    if (!this.edit && this.salesman) {
      this.formSalesmans.setValue({
        id: this.salesman.id,
        name: this.salesman.name,
        category: this.salesman.category,
        address: this.salesman.address,
        photo: this.salesman.photo,
        vehicle: this.salesman.vehicle
      });
    }
  }

  closeModal() {
    this.show = false;
    this.showInFalse.emit(false);
  }

  saveSalesman() {
    if (this.formSalesmans.valid) {
      try {
        const salesmanData: any = this.formSalesmans.value;
        this.salesmanService.create(salesmanData).subscribe((data: any) => {
          if (data.statudCode === "OK") {
            this.closeModal();
          }
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Formulario inválido');
    }
  }
}
