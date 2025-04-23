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
    FiscalidadOperativa,
    AtencionClientePequeñoComercio,
    AtencionVentaEstablecimientosComerciales,
    tecnicasParaVentaHabilidadesComerciales,
    neuromarketing
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
    {
        slug: 'atencion-cliente-lengua-extranjera',
        props: {content: AtencionClientePequeñoComercio, course: courses[13] }
    },
    {
        slug: 'atencion-venta-establecimientos-comerciales',
        props: {content: AtencionVentaEstablecimientosComerciales, course: courses[14] }
    },
    {
        slug: 'tecnicas-ventas-habilidades-comerciales',
        props: {content: tecnicasParaVentaHabilidadesComerciales, course: courses[15] }
    },
    {
        slug: 'neuromarketing',
        props: {content: neuromarketing, course: courses[16] }
    },
]