import { Component, OnInit, inject, signal } from '@angular/core';
import { MetasComponent } from '../../design/metas/metas.component';
import { MetasService } from '../../../infraestructure/driven-adapters/meta/metas.service';
import { Metas } from '../../../domain/models/metas';
import { diagonalAnimada, izquierdaADerecha } from '../../core/animations/animations';
import { NgOptimizedImage } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-listar-metas',
  standalone: true,
  imports: [MetasComponent, NgOptimizedImage],
  templateUrl: './listar-metas.component.html',
  styleUrl: './listar-metas.component.scss',
  animations: [
    izquierdaADerecha,
    diagonalAnimada
  ]
})
export class ListarMetasComponent implements OnInit{

  metasService = inject(MetasService);
  listaDeMetas : Metas [];
  listaDeMetasBack? : Metas [];
  dataObtenida = ''
  ejemploObservable  = of('Hola Mundo observables');
  sesion = signal({usuario:'weincode', id:'2', nombre: 'Daniel'})

  constructor() {
    this.listaDeMetas = this.metasService.obtenerMetas();
  }
  ngOnInit(): void {
    this.metasService.obtenerMetasBack().then((valorObtenido: Metas[]) => {
      this.listaDeMetasBack = valorObtenido
    })
    this.ejemploObservable.subscribe((valor)=> {
      this.dataObtenida = valor
    })
  }
  modificarSignal(){
    this.sesion.set({usuario:'Weincoders', id: Math.random().toString(), nombre: 'Academia X'})
  }
}
