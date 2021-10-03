import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-hipaa',
  templateUrl: './hipaa.component.html',
  styleUrls: ['./hipaa.component.scss']
})
export class HipaaComponent {
  inForm: FormGroup;
  title = 'HIPAA';
  modTitle = '';
  id = undefined;
  listData = [];
  isVisible = false;

  // url for dummy image
  previewImage = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';;
  previewVisible = false;

  // Expires date validation
  disabledDate = (current: Date): boolean => current < new Date();

  constructor(private fb: FormBuilder, private modal: NzModalService) {
  }

  // create / Add record
  createRecord(): void {
    this.modTitle = 'Add New HIPAA Consent';
    this.loadForm({signed: undefined, expires: undefined});
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  // load form for Add / Edit records
  loadForm(data): void {
    this.inForm = this.fb.group({
      signed: [data.signed, [Validators.required]],
      expires: [data.expires, [Validators.required]],
      status: ['Active'],
    });
    this.isVisible = true;
  }

  // submit form for add / edit records
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

  // edit record
  editRecord(id): void {
    this.id = id;
    this.modTitle = 'Edit HIPAA Consent';
    const data = this.listData.filter(value => value.id === id)[0];
    this.loadForm(data);
  }

  // delete record
  deleteRecord(id): void {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete this item?</i>',
      nzOnOk: () => {
        this.listData = this.listData.filter(d => d.id !== id);
      }
    });
  }

  handlePreview(): void {
    this.previewVisible = true;
  }
}
