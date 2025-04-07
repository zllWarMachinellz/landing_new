import { 
    BusquedaGestionInformacionDigital,
    ComunicacionColoboracionConHerramientasDigitales,
    CreacionContenidosDigitales,
    IniciacionInformatica,
    AplicacionHojaDeCalculoExcelInicial,
    AplicacionHojaDeCalculoExcelAvanzado,


} from "./couses-info";

export const indice = [
    {
        slug: 'creacion-contenidos-digitales',
        props: CreacionContenidosDigitales
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