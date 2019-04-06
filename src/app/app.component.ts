import {Component} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakInstance } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ferret-space-ui';

  userDetails: KeycloakProfile;
  clientDetails: KeycloakInstance;

  constructor(private keycloakService: KeycloakService) {
  }

  async ngOnInit() {
    if (await this.keycloakService.isLoggedIn()) {
      this.clientDetails = this.keycloakService.getKeycloakInstance();
      this.userDetails = await this.keycloakService.loadUserProfile();
    }
  }

  async doLogout() {
    await this.keycloakService.logout();
  }
}
