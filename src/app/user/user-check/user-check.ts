import { Component, signal, effect } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { UserCheckService } from '../../services/user-check';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-check',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div>
      <label>Username:</label>
      <input [formControl]="usernameControl" />
      <p>{{ status() }}</p>
    </div>
  `
})
export class UserCheckComponent {
  usernameControl = new FormControl('');
  status = signal<'Idle' | 'Checking...' | 'Available' | 'Taken'>('Idle');

  constructor(private service: UserCheckService) {
    this.usernameControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(value => {
        if (!value) {
          this.status.set('Idle');
          return of(null);
        }
        this.status.set('Checking...');
        return this.service.checkAvailability(value);
      })
    ).subscribe(result => {
      if (result === null) return;
      this.status.set(result ? 'Available' : 'Taken');
    });
  }
}