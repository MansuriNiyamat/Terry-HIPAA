import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-hipaa',
  templateUrl: './hipaa.component.html',
  styleUrls: ['./hipaa.component.scss']
})
export class HipaaComponent implements OnInit {
  inForm: FormGroup;
  title = 'HIPAA';
  modTitle = '';
  id = undefined;
  listData = [];
  isVisible = false;
  constructor(private fb: FormBuilder, private modal: NzModalService) {
  }
  ngOnInit(): void {
  }
  createRecord(): void {
    this.modTitle = 'Add New HIPAA Consent';
    this.loadForm({signed: undefined, expires: undefined});
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  loadForm(data): void {
    this.inForm = this.fb.group({
      signed: [data.signed, [Validators.required]],
      expires: [data.expires, [Validators.required]],
      status: ['Active'],
    });
    this.isVisible = true;
  }

  submitForm(): void {
    const formData = this.inForm.value;
    const obj = { status: formData.status, signed: formData.signed, expires: formData.expires };
    if (this.id) {
      obj['id'] = this.id;
      const index = this.listData.findIndex(item => item.id === this.id);
      Object.assign(this.listData[index], obj);
    } else {
      obj['id'] = Math.floor(Math.random() * 100000);
      this.listData = [...this.listData, obj];
    }
    this.isVisible = false;
  }

  editRecord(id): void {
    this.id = id;
    this.modTitle = 'Edit HIPAA Consent';
    const data = this.listData.filter(value => value.id === id)[0];
    this.loadForm(data);
  }

  deleteRecord(id): void {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete this item?</i>',
      nzOnOk: () => {
        this.listData = this.listData.filter(d => d.id !== id);
      }
    });
  }
}
