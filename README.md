# Arxjs

Unsubscribe handler:
Easy way to unsubscribe subscriptions whenever component destroyed.   

Action Payload: 
A simple way for managing your Angular ngrx Actions. 
This package provides Action and PayloadAction interfaces that you can wrap your action classes.  

## Install

```
npm install arxjs
```

## <a name="usage"></a>Getting started

## Unsubscribe helper: UnsubscriptionHandler

```typescript
import { UnsubscriptionHandler } from 'arxjs';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';

export class UsersComponent extends UnsubscriptionHandler {
 constructor(
    protected store: Store<any>,
    protected route: ActivatedRoute, 
   ) {
    super();
 }

 // Subscribe any type of stream and use this.unsubscribe$ to unsubscribe them. 
 test() {
    this.store.pipe(select(fromStore.getUsers), takeUntil(this.unsubscribe$)).subscribe(data => {
      ...
    });

    this.route.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe(params => {
      ...
    });
 }
}

```

## NgRx action helpers: Action & Action Payload

```typescript

import {UserInterface} from './interfaces/user.interface';
import { Action, PayloadAction } from 'arxjs';

export const LOAD_USERS = '[Admin] LOAD_USERS';
export const LOAD_USERS_SUCCESS = '[Admin] LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAIL = '[Admin] LOAD_USERS_FAIL';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersSuccess extends PayloadAction<UsersInterface[]> {
  readonly type = LOAD_USERS_SUCCESS;
}

export class LoadUsersFail extends PayloadAction<any> {
  readonly type = LOAD_USERS_FAIL;
}

export type AdminAction = LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail;

```

So instead of writing 

```typescript
export class LoadUsersSuccess implemant Action {
  readonly type = ADMIN_USER_LIST_SUCCESS;
  constructor(public payload: UsersInterface[]) {}
}

export class LoadUsersFail implemant Action {
  readonly type = LOAD_USERS_FAIL;
  constructor(public payload: any) {}
}
```

Use PayloadAction class 

```typescript
export class AdminUserListSuccess extends PayloadAction<UsersInterface[]> {
  readonly type = ADMIN_USER_LIST_SUCCESS;
}

export class LoadUsersFail extends PayloadAction<any> {
  readonly type = LOAD_USERS_FAIL;
}
```

## Arxjs tooltips

Inside your Module file add TooltipDirective and TooltipService
```typescript

import { TooltipDirective, TooltipService } from 'arxjs';
...

@NgModule({
  ...
  exports: [ TooltipDirective ],
  declarations: [ TooltipDirective ],
  providers: [ TooltipService ]
})
```

Now add arxjsTooltip attribute to your component
```
<component arxjsTooltip tooltipTitle="Hello arxjs tooltip" placement="right"></component>
<component arxjsTooltip [tooltipTitle]="TITLE_VARIABLE" [placement]="POSITION_VARIABLE"></component>
```
As you can see Arxjs Tooltip has 2 arguments tooltipTitle and placement( right, left, top, bottom )

See the package [arxjs](https://github.com/Armen96/arxjs) for more information.
