import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para usar *ngFor y *ngIf[cite: 6]

// Interfaz para definir la estructura de la carta
export interface Carta {
  id: number;
  imagen: string;
  descubierta: boolean;
}

@Component({
  selector: 'app-punto3',
  standalone: true, // Componente independiente[cite: 8]
  imports: [CommonModule], // Importamos las directivas básicas[cite: 6]
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3Component {
  tablero: Carta[] = []; // Tablero de 12 elementos
  intentos: number = 10; // Cantidad de intentos[cite: 1]
  juegoIniciado: boolean = false;
  cartasSeleccionadas: Carta[] = [];

  iniciarJuego() {
    // AQUÍ: Pon los nombres exactos de tus 6 fotos que están en public/img/memoria
    const imagenesBase = ['angular.png', 'boostrap.png', 'css.png', 'html.png', 'react.png', 'javascript.png'];
    
    // Duplicamos y mezclamos aleatoriamente
    let cartasMezcladas = [...imagenesBase, ...imagenesBase].sort(() => Math.random() - 0.5);

    this.tablero = cartasMezcladas.map((img, index) => ({
      id: index,
      imagen: img,
      descubierta: false // Todas inician tapadas[cite: 1]
    }));

    this.intentos = 10;
    this.juegoIniciado = true;
    this.cartasSeleccionadas = [];
  }

  reiniciarJuego() {
    this.iniciarJuego(); // Resetea el juego[cite: 1]
  }

  intentar(carta: Carta) {
    if (carta.descubierta || this.cartasSeleccionadas.length === 2 || this.intentos === 0) return;

    carta.descubierta = true;
    this.cartasSeleccionadas.push(carta);

    if (this.cartasSeleccionadas.length === 2) {
      setTimeout(() => this.verificarPareja(), 1000);
    }
  }

  verificarPareja() {
    const [carta1, carta2] = this.cartasSeleccionadas;

    if (carta1.imagen !== carta2.imagen) {
      // Fallo: Si son distintas, se vuelven a tapar y se resta un intento[cite: 1]
      carta1.descubierta = false;
      carta2.descubierta = false;
      this.intentos--;
    }

    this.cartasSeleccionadas = [];

    // Victoria o derrota
    const victoria = this.tablero.every(c => c.descubierta);
    if (victoria) {
      alert('¡Victoria! Descubriste todo el tablero.');
    } else if (this.intentos === 0) {
      alert('¡Derrota! Ya no te quedan intentos.');
    }
  }
  // Función para que Angular no redibuje ni mezcle el tablero al hacer clic
  trackPorId(index: number, carta: Carta) {
    return carta.id;
  }
}