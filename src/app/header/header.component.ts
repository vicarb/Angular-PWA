import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../services/my-data.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myData: any;
  myData$: any;
  constructor(private myDataService: MyDataService) {
   }

  ngOnInit(): void {
    this.myData$ = this.myDataService.getData().pipe(tap((data) => (this.myData = data)));
    // this.myDataService.getData().subscribe((data) => {
    //   this.myData = data;
    //   console.log("--->",this.myData);
      
    // });

  }

}
