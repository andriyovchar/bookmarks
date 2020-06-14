import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GroupsComponent} from './containers/groups/groups.component';
import {GroupComponent} from './containers/group/group.component';

const routes: Routes = [
  {path: 'groups', component: GroupsComponent},
  {path: 'group/:id', component: GroupComponent},
  {path: '', redirectTo: '/groups', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
