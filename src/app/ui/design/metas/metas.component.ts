import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Metas } from '../../../domain/models/metas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metas',
  standalone: true,
  imports: [],
  templateUrl: './metas.component.html',
  styleUrl: './metas.component.scss'
})
export class MetasComponent  implements OnInit, OnChanges{
  @Input()
  meta : Metas = {
    id: '1',
    detalles: 'Test Meta',
    periodo: 'month',
    eventos: 2,
    icono: '💻',
    meta: 100,
    plazo: '2022-12-31',
    completado: 50,
};
  alcanzado!: number
  constructor(private router:Router){}
  ngOnChanges(changes: SimpleChanges): void {
   
  }
  ngOnInit(): void {
    this.alcanzado = this.meta.completado/this.meta.meta * 100;
  }
  editarMeta(meta:Metas){
    const queryParams = JSON.stringify(meta)
    this.router.navigate(['/editar'], {queryParams: {meta: queryParams}})
  }


}
