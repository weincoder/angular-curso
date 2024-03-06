import { Routes } from '@angular/router';
import { ListarMetasComponent } from '../ui/pages/listar-metas/listar-metas.component';
import { NuevoComponent } from '../ui/pages/nuevo/nuevo.component';
import { ModalComponent } from '../ui/pages/modal/modal.component';
import { CleanMetaPageComponent } from '../ui/pages/clean-meta-page/clean-meta-page.component';


export const routes: Routes = [
    {
        path:'',
        component: ListarMetasComponent
    },
    {
        path:'crear',
        component: NuevoComponent
    },
    {
        path:'editar',
        component: ModalComponent
    },
    {
        path:'metas-nueva',
        component: CleanMetaPageComponent
    },
];
