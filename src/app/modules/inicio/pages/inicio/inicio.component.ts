import { Component, OnInit } from '@angular/core';
// IMPORTAMOS NUESTRA INTERFAZ
import { TarjetasInicio } from 'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: TarjetasInicio[];

  // INICIALIZA LA PROPIEDAD INFO
  constructor(){
    this.info = [
      {
        titulo:"Tarjeta1",
        descripcion:"Messi Besando La Copa Del Mundo Ganada en Qatar",
        imagen:"https://media.a24.com/p/54293f5307d2bae0d47c21b40ca7a1d4/adjuntos/296/imagenes/009/092/0009092018/1200x675/smart/messi-copajpg.jpg",
        alt:"messi"
      }
      
      
    ]
  }

  // EVENTO DE CONSTRUCCIÓN/ INICIALIZACIÓN
  ngOnInit(): void{
  }
}
