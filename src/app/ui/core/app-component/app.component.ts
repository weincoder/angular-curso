import { Component } from '@angular/core';
import { EncabazamientoComponent } from '../../layout/encabazamiento/encabazamiento.component';
import { PrincipalComponent } from '../../layout/principal/principal.component';
import { PieComponent } from '../../layout/pie/pie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ EncabazamientoComponent, PrincipalComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-metas';
}
