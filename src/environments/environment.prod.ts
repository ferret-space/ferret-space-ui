import {KeycloakConfig} from "keycloak-angular";

let keycloakConfig: KeycloakConfig = {
  url: 'http://keycloak.ferret.space:8080/auth',
  realm: 'ferret-space',
  clientId: 'ferret-space-ui'
};

export const environment = {
  production: true,
  apis: {
    backend: '/api'
  },
  keycloak: keycloakConfig
};
