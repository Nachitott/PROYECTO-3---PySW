import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Habilita *ngIf, *ngFor y los pipes (currency, date)
import { FormsModule, NgForm } from '@angular/forms'; // <-- Habilita el uso de [(ngModel)]
import { Punto4Service } from '../../services/punto4service';
import { Inscripcion } from '../../models/punto4.model';


@Component({
  selector: 'app-punto4',
  standalone: true, // <-- Fundamental en las versiones nuevas de Angular
  imports: [CommonModule, FormsModule], // <-- Inyectamos las herramientas para el HTML
  templateUrl: './punto4.html',
  styleUrls: ['./punto4.css']
})
export class Punto4Component implements OnInit {
  nuevaInscripcion: Inscripcion = this.resetInscripcion();
  listaInscripciones: Inscripcion[] = [];

  constructor(private Punto4Service: Punto4Service) {}

  ngOnInit(): void {
    this.listaInscripciones = this.Punto4Service.getInscripciones();
  }

  resetInscripcion(): Inscripcion {
    return { dni: '', precio: 0, categoriaAlumno: '', fechaInscripcion: new Date(), email: '', curso: '', precioFinal: 0 };
  }

  calcularPrecioFinal() {
    if (this.nuevaInscripcion.precio > 0 && this.nuevaInscripcion.categoriaAlumno) {
      let descuento = 0;
      if (this.nuevaInscripcion.categoriaAlumno === '1') descuento = 0.35; 
      else if (this.nuevaInscripcion.categoriaAlumno === '2') descuento = 0.50; 
      
      this.nuevaInscripcion.precioFinal = this.nuevaInscripcion.precio * (1 - descuento);
    }
  }

  registrar(formulario: NgForm) {
    if(formulario.valid) {
      this.nuevaInscripcion.fechaInscripcion = new Date();
      this.Punto4Service.agregarInscripcion({...this.nuevaInscripcion});
      
      // Reseteamos el objeto de datos
      this.nuevaInscripcion = this.resetInscripcion();
      
      // Reseteamos el estado visual del formulario (limpia los errores rojos)
      formulario.resetForm(this.nuevaInscripcion); 
    }
  }

  obtenerResumen(categoria: string): number {
    return this.listaInscripciones.filter(i => i.categoriaAlumno === categoria).length;
  }

  obtenerTotalGeneral(): number {
    return this.listaInscripciones.reduce((acc, current) => acc + current.precioFinal, 0);
  }
}