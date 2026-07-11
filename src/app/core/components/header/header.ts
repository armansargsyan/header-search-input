import { Component, computed, inject, signal } from '@angular/core';
import { HeaderControls } from './controls';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserMockDataService } from '../../services';

@Component({
  selector: 'app-header',
  imports: [HeaderControls, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly notificationsCount = signal(32);
  private readonly userService = inject(UserMockDataService);
  protected readonly profilePictureURL = computed(() => {
    const userProfilePic = this.userService.user()?.profilePicUrl;
    return userProfilePic ?? 'shared/default-AVA.jpg'
  });
}
