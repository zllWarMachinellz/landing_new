

export interface CursoInfo {
    title: string;
    objetivo: string;
    requisitosAlumnos: string | Lista;
    modulos:  Modulo[];
}

export interface Modulo {
    titulo: string;
    objetivo: string;
    duracion: number;
    resultados: Resultado[];
}

export interface Resultado {
    title: string;
    listas: Lista[] | string[];
    resume?: string;
}

export interface Lista {
    header: string;
    body?: string[];
    listas?: string[];
}
