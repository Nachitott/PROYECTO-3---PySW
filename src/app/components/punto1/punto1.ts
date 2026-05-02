import { Component } from '@angular/core';

interface Evento{
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})

export class Punto1 {
  //Arreglos de evento que van a tener el tipo definido anteriormente
  listaEventos: Evento[] = [{
    nombre: 'Taller de Yoga',
    descripcion: 'Relajacion y meditacion profunda',
    imagen: 'assets/yoga.jpg',
    precio: 9120 
  },
  { 
    nombre: 'Festival Gastronómico', 
    descripcion: 'Degustación de platos típicos regionales.', 
    imagen: 'https://picsum.photos/500/300?random=1', 
    precio: 2500 
  },
  { 
    nombre: 'Curso de Fotografía', 
    descripcion: 'Capturá los mejores paisajes del norte.', 
    imagen: 'assets/fotos.jpg', 
    precio: 3000 
  }
  ];
  //Variable para empezar (con el primero predeterminadamente)
  indice: number= 0;

  siguiente(): void {
  //si no es el ultimo, avanzamos
  if (this.indice < this.listaEventos.length - 1){
    this.indice ++;
  }
}

anterior (): void{
  //si el indice no es el primero, retrocedemos
  if (this.indice > 0){
    this.indice --;
  }
}
}

