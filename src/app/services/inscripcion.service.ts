import { Injectable } from '@angular/core';

export interface Inscripcion {
  dni: string;
  precio: number;
  categoriaAlumno: string;
  fechaInscripcion: Date;
  email: string;
  curso: string;
  precioFinal: number;
}

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private inscripciones: Inscripcion[] = [];

  constructor() { }

  getInscripciones(): Inscripcion[] {
    return this.inscripciones;
  }

  agregarInscripcion(nueva: Inscripcion) {
    this.inscripciones.push(nueva);
  }
}