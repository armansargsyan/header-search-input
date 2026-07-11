import { Injectable, signal } from '@angular/core';

export interface User {
  name: string;
  profilePicUrl: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserMockDataService {
  readonly user = signal<User>({
    name: "Arman Sargsyan",
    profilePicUrl: '/shared/AVA.png'
  })
}
