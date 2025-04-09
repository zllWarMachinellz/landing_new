import { 
    BusquedaGestionInformacionDigital,
    ComunicacionColoboracionConHerramientasDigitales,
    CreacionContenidosDigitales,
    IniciacionInformatica,
    AplicacionHojaDeCalculoExcelInicial,
    AplicacionHojaDeCalculoExcelAvanzado,
    ModuloSdVentasDistribucion,
    ModuloMmGestionMateriales,
    GestionComercioExterior,
    GestionFiscalEmpresa,
    FiscalidadOperativa
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
    },
    {
        slug: 'sap-ventas-distribucion',
        props: {content: ModuloSdVentasDistribucion, course: courses[8]},
    },
    {
        slug: 'sap-gestion-materiales',
        props: {content: ModuloMmGestionMateriales, course: courses[9]},
    },
    {
        slug: 'gestion-comercio-exterior',
        props: {content: GestionComercioExterior, course: courses[10] }
    },
    {
        slug: 'gestion-fiscal-empresa',
        props: {content: GestionFiscalEmpresa, course: courses[11] }
    },
    {
        slug: 'fiscalidad-operativa',
        props: {content: FiscalidadOperativa, course: courses[12] }
    },
]