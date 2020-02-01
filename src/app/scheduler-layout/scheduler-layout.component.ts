import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Moment } from 'moment';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';


@Component({
  selector: 'app-scheduler-layout',
  templateUrl: './scheduler-layout.component.html',
  styleUrls: ['./scheduler-layout.component.scss']
})
export class SchedulerLayoutComponent implements OnInit {

  public weekdays;
  public timeStops;
  public newWeek;


  constructor(private _dataService: DataServiceService, private dialog: MatDialog) { }

  ngOnInit() {
    this.weekdays = this._dataService.getCurrentWeek();
    this.timeStops = this._dataService.getTimeStops('00:00', '23:59');
    console.log(this.weekdays);
    this.newWeek =this._dataService.buildWeekObj1();
  }



  addTask(i, day) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      top: '300px',
      left: '450px',
    }
    dialogConfig.width = '500px'

    dialogConfig.data = {
      description: '',
      time: i,
      day: day
    };

    const dialogRef = this.dialog.open(TaskDialogComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      val => {
        i['weekDays'].eventName = val.description;
        day.eventName = val.description;
      }

    );


  }

}
