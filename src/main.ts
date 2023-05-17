import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    if (environment.production) {
      return;
    }
    localStorage.setItem(
      'authorization_token',
      `${btoa('zomboy90:TEST_PASSWORD')}`
    );
  })
  .catch((err) => console.error(err));
