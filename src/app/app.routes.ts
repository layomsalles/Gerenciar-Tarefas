import { Routes } from '@angular/router';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { ConsultarTarefa } from './components/pages/consultar-tarefa/consultar-tarefa';
import { CriarTarefa } from './components/pages/criar-tarefa/criar-tarefa';
import { EditarTarefa } from './components/pages/editar-tarefa/editar-tarefa';

export const routes: Routes = [
    {
        path: "pages/dashboard",
        component: Dashboard
    },
    {
        path: "pages/consultar-tarefa",
        component: ConsultarTarefa
    },
    {
        path: "pages/criar-tarefa",
        component: CriarTarefa
    },
    {
        path: "pages/editar-tarefa",
        component: EditarTarefa
    },
    {
        path: '', pathMatch: "full",
        redirectTo: "/pages/dashboard"
    }
];
