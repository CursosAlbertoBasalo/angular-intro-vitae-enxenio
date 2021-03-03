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
ng g m search --route=search
```
