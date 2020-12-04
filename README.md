# Angualr Starter

## Commands

```
"ng": "ng",
"start": "ng serve",
"build": "ng build",
"test": "ng test",
"lint": "ng lint",
"e2e": "ng e2e",
"lint-css": "stylelint src/**/*.scss",
"prettier": "prettier --write \"**/*.{js,json,css,scss,less,md,ts,html,component.html}\"",
"commit": "npx git-cz",
"version": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md",
"dev": "ng serve",
"hmr": "ng serve --configuration hmr",
"prod": "ng build --prod",
"dev:ssr": "ng run angular-starter:serve-ssr",
"serve:ssr": "node dist/angular-starter/server/main.js",
"build:ssr": "ng build --prod && ng run angular-starter:server:production",
"prerender": "ng run angular-starter:prerender"
```

## Configs

### [GitFlow](https://danielkummer.github.io/git-flow-cheatsheet/index.ru_RU.html)

- install: `git flow init`

### [Please Use Yarn](https://www.freecodecamp.org/news/how-to-force-use-yarn-or-yarn/)

- add `.yarnrc` in the root folder
  ```
  engine-strict = true
  ```
- modify `package.json`
  ```
  "engines": {
    "npm": "please-use-yarn",
    "yarn": ">= 1.22.4"
  },
  ```

### Tsconfig

- modify `tsconfig.json`

```
"resolveJsonModule": true,
"esModuleInterop": true
```

### Environement

- create `environment.hmr` with `hmr: true`
- update `.gitignore` with

```
# env
/src/environments/environment.ts
/src/environments/environment.prod.ts
/src/environments/environment.hmr.ts
```

And use `env.example.ts` to push git

### Core

- update 'index.html' with

```
<app-core></app-core>
```

### HMR

- update angular.json

```
"build": {
    "configurations": {
        ...
        "hmr": {
            "fileReplacements": [
                {
                    "replace": "src/environments/environment.ts",
                    "with": "src/environments/environment.hmr.ts"
                }
            ]
        }
    }
},
"serve": {
    "configurations": {
        "hmr": {
            "hmr": true,
            "browserTarget": "<project-name>:build:hmr"
        }
    }
}
```

- update src/tsconfig.app.json

```
{
    "compilerOptions": {
        "types": ["node"]
    },
}
```

- add script

```
"scripts": {
    "hmr": "ng serve --configuration hmr"
}
```

- install `yarn add --dev @angularclass/hmr`
- create file `src/hmr.ts` with

```
import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';
export const hmrBootstrap = (module: any, bootstrap: () => Promise<NgModuleRef<any>>) => {
        let ngModule: NgModuleRef<any>;
        module.hot.accept();
        bootstrap().then(mod => ngModule = mod);
        module.hot.dispose(() => {
        const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
        const elements = appRef.components.map(c => c.location.nativeElement);
        const makeVisible = createNewHosts(elements);
        ngModule.destroy();
        makeVisible();
    });
};
```

- update `main.ts` with

```
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppBrowserModule } from './app/app.module';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';
if (environment.production) {
    enableProdMode();
}
const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppBrowserModule);
if (environment.hmr) {
    if (module[ 'hot' ]) {
        hmrBootstrap(module, bootstrap);
    } else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
} else {
    bootstrap().catch(err => console.log(err));
}
```

### Angular Universal

- install `ng add @nguniversal/express-engine`
- rename `app.module` to `app.browser.module`
- move `BrowserModule.withServerTransition({ appId: "serverApp" })` to `app-core.module.ts`
- add `NoopAnimationsModule` for `app-server.module.ts`
- add `BrowserAnimationsModule` for `app-browser.module.ts`

### Angular Material

- install `ng add @angular/material`

### [Commitizen](https://github.com/commitizen/cz-cli)

- install: `yarn install --dev commitizen`
- making your repo commitizen-friendly `commitizen init cz-conventional-changelog --save-dev --save-exact`
- add the `config.commitizen` key to the root of your package.json as shown here:
  ```
  "config": {
      "commitizen": {
        "path": "cz-conventional-changelog"
      }
  }
  ```
  and yarn command to package.json scripts
  ```
  "commit": "npx git-cz",
  ```

### [Commitlint](https://github.com/conventional-changelog/commitlint)

- install: `yarn add --dev @commitlint/config-conventional @commitlint/cli`,
- add the `commitlint.config.js` in the root folder with:
  ```
  module.exports = {
    extends: ['@commitlint/config-conventional']
  };
  ```

### [Changelog](https://www.yarnjs.com/package/conventional-changelog-cli)

- install: `yarn add --dev conventional-changelog-cli`
- init changelog: `conventional-changelog -p angular -i CHANGELOG.md -s -r 0`,
- add yarn command

```
  "version": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md",
```

### Linters

- install: `ng add @angular-eslint/schematics`
- install plugins for [ESlint](https://eslint.org/) `yarn add --dev eslint-plugin-jsdoc eslint-plugin-prefer-arrow eslint-plugin-simple-import-sort eslint-plugin-jasmine eslint-plugin-import`
- install `ng add @schuchard/prettier`
- install plugin for [Prettier](https://prettier.io/) `yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier`
- install plugins for [Stylelint](https://stylelint.io/) `yarn add --dev stylelint stylelint-config-standard`
- create `.eslintrc.js` with

```
module.exports = {
  extends: ["plugin:@angular-eslint/recommended"],
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    createDefaultProgram: true
  },
  rules: {
    quotes: ["error", "double"]
  },
  overrides: [
    {
      files: ["*.component.html"],
      parser: "@angular-eslint/template-parser",
      parserOptions: {
        project: "./tsconfig.app.json",
        ecmaVersion: 2020,
        sourceType: "module"
      },
      plugins: ["@angular-eslint/template"]
    },
    {
      files: ["*.ts"],
      plugins: [
        "@angular-eslint/template",
        "@typescript-eslint",
        "import",
        "jsdoc",
        "prefer-arrow",
        "prettier",
        "simple-import-sort"
      ],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@angular-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint"
      ],
      rules: {
        "@angular-eslint/directive-selector": ["error", { type: "attribute", prefix: "app", style: "camelCase" }],
        "@angular-eslint/component-selector": ["error", { type: "element", prefix: "app", style: "kebab-case" }],
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "sort-imports": "off",
        "simple-import-sort/sort": [
          "error",
          {
            groups: [
              // Side effect imports.
              ["^\\u0000"],
              // Packages.
              ["^@?(?!mediu@nrwl/eslint-plugin-nxm-stories)\\w"],
              ["^@medium-stories?\\w"],
              ["^[^.]"],
              // Relative imports.
              // Anything that starts with a dot.
              ["^\\."]
            ]
          }
        ]
      },
      parser: "@typescript-eslint/parser"
    },
    {
      files: ["src/**/*.spec.ts", "src/**/*.d.ts"],
      parserOptions: {
        project: "./src/tsconfig.spec.json"
      },
      extends: ["plugin:jasmine/recommended"],
      plugins: ["jasmine"],
      env: { jasmine: true },
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-assignmentall": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-assignment": "off"
      }
    }
  ]
};
```

- edit `angular.json` with

```
"lint": {
    "builder": "@angular-eslint/builder:lint",
    "options": {
        "eslintConfig": ".eslintrc.js",
        "tsConfig": [
            "tsconfig.app.json",
            "tsconfig.spec.json",
            "e2e/tsconfig.json"
        ],
        "exclude": [
            "**/node_modules/**"
        ]
    }
},
```

- create `.stylelintrc` with

```
"extends": "stylelint-config-standard",
"rules": {
    "at-rule-empty-line-before": null
}
```

- update `package.json` with

```
"scripts": {
    "lint-css": "stylelint src/**/*.css"
}
```

- create `.lintstagedrc` with

```
{
    "*.{js,json,md,html}": [
        "prettier --write"
    ],
    "*.{css,scss,sass,less,stylus}": [
        "prettier --write",
        "npm run lint-css"
    ],
    "*.{ts}": [
        "prettier --write",
        "npm run lint"
    ]
}
```

### [Husky](https://github.com/typicode/husky)

- install: `yarn add --dev husky`
- setup hooks in `package.json`:

```
"husky": {
    "hooks": {
          "pre-commit": "lint-staged",
          "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
          "pre-push": "yarn prod"
    }
},
```

## SCSS

- install [normalize.css](https://necolas.github.io/normalize.css/) `yarn add normalize.css`

- add `scss/styles/reset/` with

  - `typography.scss`

  ```
  html {
      font-size: 1px; /*for using REM units*/
  }
  body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      font-size: 16rem;
      font-weight: 400;
      line-height: 1.3;
      color: #222;
  }
  ```

  - `index.scss`

  ```
  @import "typography";

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  button {
    background-color: transparent;
    color: inherit;
    border-width: 0;
    padding: 0;
    cursor: pointer;
  }
  figure {
    margin: 0;
  }
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
    margin: 0;
  }
  ul,
  ol,
  dd {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }
  p {
    margin: 0;
  }
  cite {
    font-style: normal;
  }
  fieldset {
    border-width: 0;
    padding: 0;
    margin: 0;
  }
  ```

```
@import '~normalize.css';
```

## State Manage

- install [Akita](https://datorama.github.io/akita/) `ng add @datorama/akita`
- install [Akita CLI](https://datorama.github.io/akita/docs/enhancers/cli) `yarn add @datorama/akita-cli -g`
- install [Akita Devtools](https://datorama.github.io/akita/docs/enhancers/devtools) `yarn add @datorama/akita-ngdevtools`
- install [Akita Router Store](https://datorama.github.io/akita/docs/angular/router) `yarn add @datorama/akita-ng-router-store`

- update `app-core.module.ts` with

```
const APP_CORE_IMPORTS = [
  ...
  AkitaNgRouterStoreModule.forRoot(),
  environment.production ? [] : AkitaNgDevtools.forRoot()
];
const APP_CORE_PROVIDERS = [
    ...
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: "https://jsonplaceholder.typicode.com" }
    }
];
```

## Structure

    .
    ├── dist/                                               # Build Folder
    ├── documentation/                                      # Compodoc Documentation Folder
    ├── logs/                                               # Logs: error/combined
    ├── media/                                              # Media Folder
    ├── src/                                                # Source
    │   ├── app/                                            # Application
    │   │   ├── featureName/                                # Feature, etc: Core, Shared, Media, Auth
    │   │   │   ├── configs/                                # Feature configs
    │   │   │   │   └── app-fileName.config.ts
    │   │   │   ├── controller/                             # Feature controllers
    │   │   │   │   └── app-fileName.controller.ts
    │   │   │   ├── database/                               # Feature database
    │   │   │   │   └── app-fileName.enity.ts
    │   │   │   ├── decorators/                             # Feature decorators
    │   │   │   │   └── app-fileName.decoratore.ts
    │   │   │   │── dtos/                                   # Feature dtos
    │   │   │   │   └── app-fileName.dto.ts
    │   │   │   │── endpoints/                              # Feature endpoints
    │   │   │   │   └── app-fileName.endpoint.ts
    │   │   │   │── guards/                                 # Feature guards
    │   │   │   │   └── app-fileName.guard.ts
    │   │   │   │── services/                               # Feature services
    │   │   │   │   └── app-fileName.service.ts
    │   │   │   │── strategies/                             # Feature auth-strategies
    │   │   │   │   └── app-fileName.strategy.ts
    │   │   │   │── swagger/                                # Feature swagger
    │   │   │   │   └── app-fileName.swagger.ts
    │   │   │   │── interceptors/                           # Feature interceptors
    │   │   │   │   └── app-fileName.interceptor.ts
    │   │   │   │── routes/                                 # Feature routes
    │   │   │   │   └── app-fileName.router.ts
    │   │   │   └── app-featureName.module.ts
    │   │   ├── bootstrap/                                  # Bootstrap
    │   │   │   │── plugins/                                # NodeJs plugins
    │   │   │   └── index.ts                                # Main File
    │   │   └── app-browser.module.ts
    │   ├── assets/
    │   └── environemnts/
    │       ├── environment.hmr.example.env         # hmr
    │       ├── environment.hmr.env                 # .gitignore
    │       ├── environment.example.env             # development
    │       ├── environment.env                     # .gitignore
    │       ├── environment.prod.example.env        # production
    │       └── environment.prod.env                # .gitignore
    └── ...

## Libraries

### Components

#### Forms

- [ngx-dropzone](https://www.npmjs.com/package/ngx-dropzone) `yarn add ngx-dropzone`
- [@ngneat/edit-in-place](https://github.com/ngneat/edit-in-place) `ng add @ngneat/edit-in-place`
- [ngx-color-picker](https://www.npmjs.com/package/ngx-color-picker) `yarn add ngx-color-picker`
- [angular2-multiselect-dropdown](https://github.com/CuppaLabs/angular2-multiselect-dropdown#readme) `yarn add angular2-multiselect-dropdown`
- [@ngx-formly](https://formly.dev/guide/getting-started) `ng add @ngx-formly/schematics --ui-theme=material`
- [ngx-image-cropper](https://github.com/Mawi137/ngx-image-cropper) `yarn add ngx-image-cropper`
- [@ngneat/forms-manager](https://github.com/ngneat/forms-manager) `yarn add @ngneat/forms-manager`
- [@rxweb/types](https://www.npmjs.com/package/@rxweb/types) `yarn add @rxweb/types`

#### Data

- [ag-grid-angular](https://www.ag-grid.com/angular-grid/) `yarn add ag-grid-community ag-grid-angular`
- [@swimlane/ngx-datatable](https://www.npmjs.com/package/@swimlane/ngx-datatable) `yarn add @swimlane/ngx-datatable`
- [angular-calendar](https://angular-calendar.com/#/kitchen-sink) `ng add angular-calendar`
- [ngx-charts](https://swimlane.gitbook.io/ngx-charts/) `yarn add @swimlane/ngx-charts`

#### Template

- [ngx-skeleton-loader](https://github.com/willmendesneto/ngx-skeleton-loader#readme) `yarn add ngx-skeleton-loader`
- [@kolkov/angular-editor](https://github.com/kolkov/angular-editor#readme) `yarn add @kolkov/angular-editor`
- [ng2-dragula](https://github.com/valor-software/ng2-dragula#readme) `yarn add ng2-dragula`
- [angular-split](https://angular-split.github.io/#/) `yarn add angular-split`
- [ngx-scrolltop](https://github.com/bartholomej/ngx-scrolltop) `ng add ngx-scrolltop`
- [ngx-progressbar](https://www.npmjs.com/package/ngx-progressbar) `yarn add ngx-progressbar`
- [@agm/core](https://github.com/SebastianM/angular-google-maps) `yarn add @agm/core`
- [ngx-avatar](https://github.com/HaithemMosbahi/ngx-avatar#readme) `yarn add ngx-avatar`
- [ngx-countdown](https://cipchk.github.io/ngx-countdown/#/) `yarn add ngx-countdown`
- [xng-breadcrumb](https://github.com/udayvunnam/xng-breadcrumb) `yarn add xng-breadcrumb`
- [@techiediaries/ngx-qrcode](https://www.npmjs.com/package/@techiediaries/ngx-qrcode) `yarn add @techiediaries/ngx-qrcode`
- [ngx-progressbar](https://github.com/MurhafSousli/ngx-progressbar) `yarn add ngx-progressbar`
- [ngx-perfect-scrollbar](https://www.npmjs.com/package/ngx-perfect-scrollbar) `yarn add ngx-perfect-scrollbar`
- [@angular/flex-layout](https://github.com/angular/flex-layout) `yarn add @angular/flex-layout @angular/cdk`
- [ngx-masonry masonry-layout](https://www.npmjs.com/package/ngx-masonry) `yarn add ngx-masonry masonry-layout`
- [ngx-gallery](https://www.npmjs.com/package/ngx-gallery) `yarn add ngx-gallery font-awesome hammerjs`
- [ngx-tree](https://www.npmjs.com/package/ngx-treeview) `yarn add ngx-treeview`
- [@circlon/angular-tree-component](https://www.npmjs.com/package/@circlon/angular-tree-component) `yarn add @circlon/angular-tree-component`
- [ngx-bar-rating](https://github.com/MurhafSousli/ngx-bar-rating) `yarn add ngx-bar-rating`
- [ngx-sharebuttons](https://www.npmjs.com/package/ngx-sharebuttons) `yarn add ngx-sharebuttons`
- [ngx-highlightjs](https://ngx-highlight.netlify.app/) `yarn add ngx-highlightjs`

#### Sliders

- [@egjs/ngx-flicking](https://www.npmjs.com/package/@egjs/ngx-flicking) `yarn add @egjs/ngx-flicking`
- [@ngu/carousel](https://www.npmjs.com/package/@ngu/carousel) `yarn add @ngu/carousel`

#### PDF

- [ngx-extended-pdf-viewer](https://github.com/stephanrauh/ngx-extended-pdf-viewer) `yarn add ngx-extended-pdf-viewer`

#### Helpers

- [angular-universal](https://angular.io/guide/universal) `ng add @nguniversal/express-engine`
- [ng-animate](https://github.com/jiayihu/ng-animate) `yarn add ng-animate`
- [ngx-clipboard](https://github.com/maxisam/ngx-clipboard) `yarn add ngx-clipboard`
- [@ngneat/svg-icon](https://github.com/ngneat/svg-icon) `ng add @ngneat/svg-icon`
- [@ngneat/until-destroy](https://github.com/ngneat/until-destroy) `yarn add @ngneat/until-destroy`
- [@ngneat/hotkeys](https://github.com/ngneat/hotkeys) `yarn add @ngneat/hotkeys`
- [ngx-permissions](https://www.npmjs.com/package/ngx-permissions) `yarn add ngx-permissions`
- [ngx-mask](https://github.com/JsDaddy/ngx-mask) `yarn add ngx-mask`
- [@ctrl/ngx-rightclick](https://github.com/scttcper/ngx-rightclick) `yarn add @ctrl/ngx-rightclick`
- [ngx-infinite-scroll](https://www.npmjs.com/package/ngx-infinite-scroll) `yarn add ngx-infinite-scroll`
- [@auth0/angular-jwt](https://github.com/auth0/angular2-jwt) `@auth0/angular-jwt`
- [@ngx-pwa/local-storage](https://github.com/cyrilletuzi/angular-async-local-storage) `ng add @ngx-pwa/local-storage`
- [ngx-logger](https://www.npmjs.com/package/ngx-logger) `yarn add ngx-logger`
- [@compodoc/compodoc](https://compodoc.app/) `yarn add @compodoc/compodoc`
- [angular-rollbar](https://docs.rollbar.com/docs/angular)
- [ngx-webstorage](https://www.npmjs.com/package/ngx-webstorage) `yarn add ngx-webstorage`
- [@ngx-cache/core](https://www.npmjs.com/package/@ngx-cache/core) `yarn add @ngx-cache/core`
- [ngx-contextmenu](https://www.npmjs.com/package/ngx-contextmenu) `yarn add ngx-contextmenu @angular/cdk`
- [@angular/animations](https://www.npmjs.com/package/angular-animations) `yarn add @angular/animations@latest`
- [ngx-teximate](https://www.npmjs.com/package/ngx-teximate) `yarn add ngx-teximate ng-animate`
- [lodash](https://lodash.com/) `yarn add lodash`, `yarn add --dev @types/lodash`
- [uuid](https://www.npmjs.com/package/uuid) `yarn add uuid`, `yarn add --dev @types/uuid`
- [unique-names-generator](https://www.npmjs.com/package/unique-names-generator) `yarn add unique-names-generator`
- [chance](https://www.npmjs.com/package/chance) `yarn add chance`, `yarn add --dev @types/chance`
- [ng-table-virtual-scroll](https://www.npmjs.com/package/ng-table-virtual-scroll) `yarn add ng-table-virtual-scroll`

#### Media

- [ngx-youtube-player](https://www.npmjs.com/package/ngx-youtube-player) `ngx-youtube-player`
- [ngx-audio-player](https://vmudigal.github.io/ngx-audio-player/guide/getting-started) `yarn add ngx-audio-player`

#### Translates

- [@angular/localize](https://angular.io/guide/i18n) `ng add @angular/localize`

#### Guides

- [ngx-guided-tour](https://github.com/lsqlabs/ngx-guided-tour#readme) `yarn add ngx-guided-tour`
- [angular-shepherd](https://github.com/shipshapecode/angular-shepherd#readme) `yarn add angular-shepherd`

#### SEO

- [@ngx-meta/core](https://github.com/fulls1z3/ngx-meta) `yarn add @ngx-meta/core`
- [angulartics2](https://angulartics.github.io/angulartics2/) `yarn add angulartics2`

#### Store

- [Akita](https://github.com/datorama/akita) `ng add @datorama/akita`
- [NGXS](https://www.ngxs.io/) `yarn add @ngxs/store`

#### Date

- [ngx-moment](https://github.com/urish/ngx-moment) `yarn add ngx-moment`

#### Images

- [ngx-img-fallback](https://github.com/VadimDez/ngx-img-fallback) `yarn add ngx-img-fallback`
- [ng-lazyload-image](https://www.npmjs.com/package/ng-lazyload-image) `yarn add ng-lazyload-image`

#### Pipes

- [ngx-linky](https://github.com/dzonatan/ngx-linky) `yarn add ngx-linky`
- [ngx-filter-pipe](https://www.npmjs.com/package/ngx-filter-pipe) `yarn add ngx-filter-pipe`
- [ngx-pipes](https://www.npmjs.com/package/ngx-pipes) `yarn add ngx-pipes`
- [angular-pipes](https://www.npmjs.com/package/angular-pipes) `yarn add angular-pipes`

#### Perfomance

- [angular-idle-preload](https://www.npmjs.com/package/angular-idle-preload) `yarn add angular-idle-preload`

#### Styles

- [@angular/flex-layout](https://github.com/angular/flex-layout) `yarn add @angular/flex-layout @angular/cdk`
