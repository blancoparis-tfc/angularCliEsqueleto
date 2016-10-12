import {InMemoryDbService} from 'angular2-in-memory-web-api'

export class InMemoryResumenService implements InMemoryDbService{
    createDb(){
        let resumenes =[
            {id: '1', mes:'Agosto',ingresos:'2500',gastos:850,gastosFijos:1200 },
            {id: '2', mes:'Septiembre',ingresos:'2500',gastos:850,gastosFijos:1200 },
            {id: '3', mes:'Octubre',ingresos:'2500',gastos:850,gastosFijos:1200 }
        ]
        return {resumenes};
    }
}