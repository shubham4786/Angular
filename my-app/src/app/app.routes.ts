import { Routes } from '@angular/router';
import { Login } from './login/login';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
import { User } from './user/user';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "login", component: Login },
    { path: "about", component: About },
    { path: "contact", component: Contact },
    { path: "profile", component: Profile, data: { name: "Shubham" } },
    { path: "user/:id/:name", component: User },
    { path: '**', component: PageNotFound }

];
