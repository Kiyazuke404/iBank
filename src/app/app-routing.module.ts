import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab5', loadChildren: './tab5/tab5.module#Tab5PageModule' },
  { path: 'lainnya', loadChildren: './lainnya/lainnya.module#LainnyaPageModule' },
  { path: 'test1', loadChildren: './test1/test1.module#Test1PageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'referral', loadChildren: './referral/referral.module#ReferralPageModule' },
  { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
