import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotfoundPage } from './pages/notfound/notfound.page';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
   
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'recovery-password',
    loadChildren: () => import('./pages/recovery-password/recovery-password.module').then( m => m.RecoveryPasswordPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'asistencia-linea',
    loadChildren: () => import('./pages/asistencia-linea/asistencia-linea.module').then( m => m.AsistenciaLineaPageModule),
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),
  }, 
  {
    path: 'homeprofesor',
    loadChildren: () => import('./pages/homeprofesor/homeprofesor.module').then( m => m.HomeprofesorPageModule)
  },
  {
    path: 'veralumnos',
    loadChildren: () => import('./pages/veralumnos/veralumnos.module').then( m => m.VeralumnosPageModule)
  },
  {
    path: 'verasignaturas',
    loadChildren: () => import('./pages/verasignaturas/verasignaturas.module').then( m => m.VerasignaturasPageModule)
  },
  {
    path: '**', 
    component: NotfoundPage,
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },


 
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
