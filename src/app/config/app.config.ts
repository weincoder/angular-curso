import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { MetasGateway } from '../domain/models/gateways/metas-gateway';
import { CleanMetaService } from '../infraestructure/driven-adapters/clean-meta/clean-meta.service';
import { CleanMetaNormalService } from '../infraestructure/driven-adapters/clean-meta/clean-meta-normal.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions()), provideAnimations(),
  {provide: MetasGateway, useClass:CleanMetaNormalService}
  ]
};
