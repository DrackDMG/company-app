import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';
import { DmgSideMenu, TitleColor} from 'dmg-side-menu';
@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, SideMenuComponent, DmgSideMenu],
  templateUrl: './admin-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminLayoutComponent {
   isAuthenticated = signal(false);

   TitleColor = TitleColor;

  onLogin() {
    this.isAuthenticated.set(true);
  }

  onLogout() {
    this.isAuthenticated.set(false);
  }
 }
