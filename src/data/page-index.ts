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
        props: BusquedaGestionInformacionDigital
    },
    {
        slug: 'comunicacion-herramientas-digitales',
        props: ComunicacionColoboracionConHerramientasDigitales
    },
    {
        slug: 'competencias-digitales-basicas',
        props: IniciacionInformatica
    },
    {
        slug: 'excel-inicial',
        props: AplicacionHojaDeCalculoExcelInicial,
    },
    {
        slug: 'excel-avanzado',
        props: AplicacionHojaDeCalculoExcelAvanzado,
    }
]