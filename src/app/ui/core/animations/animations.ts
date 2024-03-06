import { animate, group, state, style, transition, trigger } from "@angular/animations";

export const izquierdaADerecha = trigger('animarLista', [
    state('void', style({ transform: 'translateX(-100%)', opacity: 0 })),
    transition(':enter', [
        animate('1500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
    ]
    )
]);

export const diagonalAnimada = trigger('animarTitulo', [
    state('void', style({ transform: 'translateX(-100%) translateY(-100%)', opacity: 0, backgroundColor: "#a9a9a9" })),
    transition(':enter', [
        group([
            animate('5500ms ease-out', style({ transform: 'translateX(0) translateY(0)' })),
            animate('3500ms ease-out', style({ opacity: 1 })),
            animate('3500ms ease-out', style({ backgroundColor: "#ffffff" }))
        ])
    ]
    )
]);

