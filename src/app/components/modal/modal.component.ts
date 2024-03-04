import { Component } from '@angular/core';
import { NuevoComponent } from '../nuevo/nuevo.component';
import { Metas } from '../../core/models/metas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NuevoComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  metas:Metas;
  constructor(private activeRouter:ActivatedRoute){
    const queryParams = this.activeRouter.snapshot.queryParams;
    this.metas =JSON.parse(queryParams['meta']) as Metas;
  }
}
