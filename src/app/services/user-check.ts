import { Injectable, signal } from '@angular/core';
import { of, delay, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserCheckService {
  private takenUsernames =  ['admin', 'root', 'test', 'user','guest'];

  checkAvailability(username: string) {
    return of(username).pipe(
      delay(1000), 
      map(name => !this.takenUsernames.includes(name.toLowerCase()))
    );
  }
}