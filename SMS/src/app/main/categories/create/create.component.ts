import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UtilityService } from '../../../core/services/utility.service';
import { NotificationService } from '../../../core/services/notification.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public _saveAndContinue: boolean = false;
  public model: any = {};
  //submitted = false;
  _formGroup: FormGroup;
  CategoryName: FormControl;
  Alias: FormControl;
  Sequence: FormControl;
  HomeFlag: FormControl;
  MetaKeyword: FormControl;
  MetaDescription: FormControl;

  constructor(private _dataService: DataService,
    private formBuilder: FormBuilder,
    private _utilityService: UtilityService,
    private _notificationService: NotificationService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.CategoryName = new FormControl('', Validators.required);
    this.Alias = new FormControl('', Validators.required);
    this.Sequence = new FormControl('', Validators.required);
    this.HomeFlag = new FormControl();
    this.MetaKeyword = new FormControl();
    this.MetaDescription = new FormControl();
  }

  createForm() {
    this._formGroup = new FormGroup({
      CategoryName: this.CategoryName,
      Alias: this.Alias,
      Sequence: this.Sequence,
      HomeFlag: this.HomeFlag,
      MetaKeyword: this.MetaKeyword,
      MetaDescription: this.MetaDescription,
    });
  }

  getValidateClass(errors, dirty, touched) {
    return this._utilityService.getValidateClass(errors, dirty, touched);
  }

  getAlias() {
    //debugger;
    //this._formGroup.value.Alias = this.CategoryName.value;
    ///this.Alias = new FormControl(this.CategoryName.value, Validators.required);
  }

  onSubmit() {
    //this.submitted = true;
    if (this._formGroup.invalid) {
      return;
    }

    let data = {
      model :{
        CategoryID: 0,
        CategoryName: this._formGroup.value.CategoryName,
        Alias: this._formGroup.value.Alias,
        Icon: null,
        OrderNumber: this._formGroup.value.Sequence,
        MetaKeyword: this._formGroup.value.MetaKeyword,
        MetaDescription: this._formGroup.value.MetaDescription,
        IsActive: true,
        HomeFlag: false,
      } 
    };

    this._dataService.post('/api/category/create', data).subscribe((value: any) => {
      if (value != null && value.ResponseCode == 200) {
        if(value.MsgType == 'success')
        {
          this._notificationService.successMessage(value.Message);
        }
        else
        {
          this._notificationService.errorMessage(value.Message);
        }
      }
    }, (error) => {
      this._dataService.handleError(error);
    });
  }

  onReset() {
    //this.registerForm.reset();
  }

  save() {
    let uri = '/api/category/create';
    this._dataService.post(uri).subscribe((value: any) => {
      if (value != null && value.ResponseCode == 200) {

        if (!this._saveAndContinue) {
          this.back();
        }
      }
    }, (error) => {
      this._dataService.handleError(error);
    });
  }

  saveAndContinue() {
    this._saveAndContinue = true;
    this.save();
  }

  back() {

  }

}
