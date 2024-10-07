import { Injectable } from '@angular/core';
import { TVShow } from '../types';

@Injectable({
  providedIn: 'root',
})
export class TVShowService {
  private tvShowList: TVShow[] = [
    {
      title: 'Breaking Bad',
      time: '9:00 PM',
    },
    {
      title: 'Game of Thrones',
      time: '8:00 PM',
    },
  ];

  getTVShowList() {
    return this.tvShowList;
  }

  addTVShow(show: TVShow): void {
    this.tvShowList.push(show);
  }

  deleteTVShow(index: number): void {
    this.tvShowList.splice(index, 1);
  }

  editTVShow(index: number, newShow: TVShow) {
    this.tvShowList[index] = newShow;
  }
}
