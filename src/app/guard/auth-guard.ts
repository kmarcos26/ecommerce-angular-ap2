import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const usuarioGuardado = localStorage.getItem('usuarioLogueado');

  if (usuarioGuardado) {
    return true;
  }

  router.navigate(['/']);
  return false;
};