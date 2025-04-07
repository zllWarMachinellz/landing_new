import { 
    BusquedaGestionInformacionDigital,
    ComunicacionColoboracionConHerramientasDigitales,
    CreacionContenidosDigitales,
    IniciacionInformatica,
    AplicacionHojaDeCalculoExcelInicial,
    AplicacionHojaDeCalculoExcelAvanzado,
} from "./couses-info";

import {courses} from "./cursos"

export const indice = [
    {
        slug: 'creacion-contenidos-digitales',
        props: {content:CreacionContenidosDigitales, course: courses[0]} 
    },
    {
        slug: 'gestion-informacion-digital',
        props: {content: BusquedaGestionInformacionDigital, course: courses[1]}
    },
    {
        slug: 'comunicacion-herramientas-digitales',
        props: {content: ComunicacionColoboracionConHerramientasDigitales, course: courses[2]}
    },
    {
        slug: 'competencias-digitales-basicas',
        props: {content: IniciacionInformatica, course: courses[4]}
    },
    {
        slug: 'excel-inicial',
        props: {content: AplicacionHojaDeCalculoExcelInicial, course: courses[5]},
    },
    {
        slug: 'excel-avanzado',
        props: {content: AplicacionHojaDeCalculoExcelAvanzado, course: courses[6]},
    }
]