```bash

ng new angular-intro-vitae-enxenio --prefix ab

npm i -D prettier tslint-config-prettier

ng g m core

ng g c core/header

ng g c core/footer --flat -s -t --skip-tests --export

ng g c core/author -flat -t

ng g s core/footer


# 3

ng g m home --route=home -m app-routing.module.ts
ng g m about --route=about -m app-routing.module.ts
ng g m domain/not-found --route=not-found -m app-routing.module.ts


ng g m domain/search --route=search
ng g m domain/categories --route=categories

ng g m domain/categories-new --route=categories/new -m app-routing

# plana
ng g m domain/categories-new --route=categories-new -m app-routing

# inconguente
ng g m domain/categories/new --route=categories/new -m app-routing

# congruente jerarquía pero potencialmente más costosa
ng g m domain/categories/new --route=new -m categories-routing
ng g m domain/categories/view --route=:id -m categories-routing
```

```
 ng g m domain/items -m=app-routing --route=items --routing
 ng g m domain/items/view --route=:id -m items-routing
```
