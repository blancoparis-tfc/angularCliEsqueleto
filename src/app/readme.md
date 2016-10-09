# Objetivo

La idea es que este fichero nos sirva para saber los cambios o pasos que hemos seguido.

## Instalar angular 2 material.

Instalar angular material
```
npm install --save @angular/material
```

Configurar los modulos de angular materia, en angular 2.

``` typescript
import { MaterialModule } from '@angular/material';
// other imports 
@NgModule({
  imports: [MaterialModule.forRoot()],
  ...
})
export class PizzaPartyAppModule { }
```

## Configurar el tema del enrutamiento.

La idea es crear un modulo. **app-routing.module.ts**

Crearemos un fichero, donde estara la configuración del enrutador.

``` typescript

import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'

import {InicioComponent} from './inicio/inicio.component'

@NgModule({
    imports:[
        RouterModule.forRoot([
            {path: 'inicio', component: InicioComponent}
        ])
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {}

```

Configurar el router.

``` typescript
import {AppRoutingModule} from './app-routing.module'
...
@NgModule({
  ...
  imports: [
    ...
    AppRoutingModule
  ],
  ...
})
```

> Las lineas de código que tenemos que poner, para establecer el enrutador.

