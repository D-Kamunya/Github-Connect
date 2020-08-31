import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      value=new Date(value)
      let today = +new Date(); //get current date and time
      var dateDifference = today-+value//returns value in miliseconds
      var dateDifferenceSeconds = Math.floor(dateDifference*0.001) //converts miliseconds to seconds
      
      // less than 30 seconds ago will show as 'Just now'
      if (dateDifferenceSeconds < 30){
        return 'Just now';
      }
     
      // All values are in seconds
      const timeIntervals = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1,
      };
      let counter;
      //loop through intervals dividing them with secs
      for (const i in timeIntervals) {
          counter = Math.floor(dateDifferenceSeconds / timeIntervals[i]);
          if (counter > 0){
            if (counter === 1) {
              // singular (1 day ago)
              return counter + ' ' + i + ' ago'; 
            } else {
                // plural (2 days ago)
                return counter + ' ' + i + 's ago'; 
            }
          }
              
      }

    }
    return value;
  }


}
