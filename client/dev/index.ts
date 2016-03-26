/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {AppCmp} from './app/components/app_cmp';

bootstrap(AppCmp).catch((err) => console.error(err));
