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