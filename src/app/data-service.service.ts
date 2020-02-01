import { Injectable } from '@angular/core';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() {
  }

  public week = <any>[24][7];

  getCurrentWeek() {
    var currentDate = moment();

    var weekStart = currentDate.clone().startOf('isoWeek');

    var days = [];

    for (var i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, 'd'));
    }
    return days;
  }

  getTimeStops(start, end) {
    var startTime = moment(start, 'HH:mm');
    var endTime = moment(end, 'HH:mm');

    if (endTime.isBefore(startTime)) {
      endTime.add(1, 'day');
    }

    var timeStops = [];

    while (startTime <= endTime) {
      timeStops.push(moment(startTime).format('HH:mm'));
      startTime.add(60, 'minutes');
    }
    return timeStops;
  }

  public buildWeekObj1() {
    let array = [];

    let currentWeek = this.getCurrentWeek();
    let timeStops = this.getTimeStops('00', '23.59');
    for (let i = 0; i < timeStops.length; i++) {
      array[i] = [];
      for (let j = 0; j < currentWeek.length; j++) {

        array[i][j] = {
          time: timeStops[i],
          weekDays: currentWeek[j],
          eventName: ''

        };
      }
    }

    return array;
  }


}
