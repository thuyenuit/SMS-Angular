import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';
// import { SystemConstants } from '../../core/common/system.constants';
// import { NotificationService } from '../../core/services/notification.service';
// import { AuthenService } from '../../core/services/authen.service';
// import { MessageConstants } from '../../core/common/message.constants';
import { UriConstants } from '../../core/common/uri.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public _pageIndex: number = 1;
  public _pageSize: number = 2;
  public _totalItems: number;
  public _display: number = 10;
  public _filter: string = '';
  public categories: any = [];

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    let uri = '/api/category/search?keyword=&page=' + this._pageIndex + '&pageSize=' + this._pageSize + '';
    this._dataService.get(uri).subscribe((value: any) => {
      if(value != null && value.ResponseCode == 200)
      {
        this.categories = value.Data.Items;
        this._totalItems = value.Data.TotalItems;
      }
    },(error) => {
      this._dataService.handleError(error);
    });
  }

  pageChanged(event:any): void{
    this._pageIndex = event.page;
    this.loadData();
  }

  onCreate(){
    this._router.navigate([UriConstants.CATEGORIES_CREATE]);
  }

}
