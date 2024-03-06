import { Metas } from "../metas";

export abstract class MetasGateway {
    abstract obtenerMetas(): Metas[];
    abstract actualizarMetas(meta:Metas): Metas[];
    abstract eliminarMetas(meta:Metas): Metas[];
    abstract obtenerMetaPorId(id:string): Metas[];
}