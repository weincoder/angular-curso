import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vinculos',
  standalone: true,
  imports: [],
  templateUrl: './vinculos.component.html',
  styleUrl: './vinculos.component.scss'
})
export class VinculosComponent {
  @Input()
  href: string = '';
  @Input()
  src: string = '';
  @Input()
  alt: string = 'descripción no arrojada';
  @Input()
  texto: string = 'texto no ingresado';
}
