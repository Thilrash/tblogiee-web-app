import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LoadingService } from './services/loading.service';

function appInitializer(loadingService: LoadingService) {
  return () => new Promise<void>((resolve) => {
    loadingService.show();
    setTimeout(() => {
      loadingService.hide();
      resolve();
    }, 100);
  });
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    LoadingService, {
    provide: 'APP_INITIALIZER',
    useFactory: appInitializer,
    deps: [LoadingService],
    multi: true
  },]
};
