import { Injectable } from "@angular/core";
import { MetasGateway } from "../models/gateways/metas-gateway";
import { Metas } from "../models/metas";



@Injectable({
    providedIn: 'root'
})
export class MetasUseCase {
    constructor(private metaGateway: MetasGateway){}
    obtenerTodasLasMetas() : Metas[]{
        return this.metaGateway.obtenerMetas()
    }
    actualizarLasMetas(meta:Metas) : Metas[]{
        return this.metaGateway.actualizarMetas(meta)
    }
}