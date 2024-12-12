import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appSistema';
  nombre: string = 'MiNombre ejemplo';
  nombre2: string = 'MiNombre2 Ejemplo2';
  lenguajes: string[] = ['C#', 'Java', 'Python', 'typescript', 'Javascript'];
  PI: number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = true;
  idioma: string = 'en';
  videoUrl: string = 'https://www.youtube.com/embed/q_ZM8uPT3us';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  persona = {
    nombre: 'MiNombre',
    Paterno: 'Apellido',
    edad: 0,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
}
