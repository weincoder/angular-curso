import { Component} from '@angular/core';
import { Metas } from '../../../domain/models/metas';
import { MetasUseCase } from '../../../domain/usecases/metas-use-case';
import { MetasComponent } from '../../design/metas/metas.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-clean-meta-page',
  standalone: true,
  imports: [MetasComponent],
  templateUrl: './clean-meta-page.component.html',
  styleUrl: './clean-meta-page.component.scss'
})
export class CleanMetaPageComponent {
  nuevaMetaACrear : Metas = {
    "id": "2",
    "detalles": "Backend",
    "periodo": "año",
    "eventos": 6,
    "icono": "📚",
    "meta": 12,
    "plazo": "2030-01-01",
    "completado": 0
}
  listaMetas:Metas[];
  dangerousUrl;
  trustedUrl;
  constructor(private metasUseCase: MetasUseCase, private sanitizer: DomSanitizer){
    this.listaMetas = metasUseCase.obtenerTodasLasMetas()
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

  nuevaMeta(){
    this.listaMetas = this.metasUseCase.actualizarLasMetas(this.nuevaMetaACrear)
  }
}
