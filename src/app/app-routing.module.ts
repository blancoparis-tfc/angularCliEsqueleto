import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'

import {InicioComponent} from './inicio/inicio.component'
import {ResumenContabilidadComponent} from './resumen-contabilidad/resumen-contabilidad.component'

@NgModule({
    imports:[
        RouterModule.forRoot([
            {path: '', component: InicioComponent},
            {path: 'resumen', component: ResumenContabilidadComponent}
        ])
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {}