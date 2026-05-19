import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/punto4.model';


@Injectable({
  providedIn: 'root'
})
export class Punto4Service {
  private inscripciones: Array<Inscripcion> = [];

  constructor() { 
    this.inscripciones = Array<Inscripcion>();
    //this.inscripciones.push(new Inscripcion('12345678 A', 1000, '1', new Date(), 'example@example.com', 'Curso 1', 1000));
  }

  getInscripciones(): Inscripcion[] {
    return this.inscripciones;
  }

  agregarInscripcion(nueva: Inscripcion) {
    this.inscripciones.push(nueva);
  }
}
