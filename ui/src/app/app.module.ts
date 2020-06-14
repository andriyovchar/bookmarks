import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {BrowserModule} from '@angular/platform-browser';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {appReducers} from './store/reducers/app.reducers';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {ConfigEffects} from './store/effects/config.effects';
import {GroupEffects} from './store/effects/group.effects';
import {AppComponent} from './app.component';
import {GroupService} from './services/group.service';
import {GroupsComponent as GroupsContainerComponent} from './containers/groups/groups.component';
import {GroupsComponent} from './components/groups/groups.component';
import {GroupComponent} from './containers/group/group.component';
import {GroupDetailsComponent} from './components/group-details/group-details.component';
import {BookmarksComponent} from './components/bookmarks/bookmarks.component';
import {BookmarksComponent as BookmarksContainerComponent} from './containers/bookmarks/bookmarks.component';
import {BookmarkEffects} from "./store/effects/bookmark.effects";
import {MatTableModule} from "@angular/material/table";
import {CreateBookmarkComponent} from './components/create-bookmark/create-bookmark.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateBookmarkComponent as CreateBookmarkContainerComponent} from './containers/create-bookmark/create-bookmark.component';
import {ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [
    AppComponent,
    GroupsContainerComponent,
    GroupsComponent,
    GroupComponent,
    GroupDetailsComponent,
    BookmarksComponent,
    BookmarksContainerComponent,
    CreateBookmarkComponent,
    CreateBookmarkContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([GroupEffects, BookmarkEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [GroupService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
