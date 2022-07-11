import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import Materia from 'src/app/core/interfaces/materias.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl: string = environment.baseUrl;
  private _materia!:  Materia;

  get materia(): Materia {
    return { ...this._materia };
  }

  obtenerMaterias(): Observable<Materia[]> {
    return this.http.get<Materia[]>(`${this.baseUrl}/materias`).pipe(
      map((usuarios) => {
        return Object.values(usuarios);
      }),
      catchError((error) => {
        console.error(error);
        return of([]);
      })
    );
  }

  obtenerHorarioMateria(materia:String){
    return this.http.get<Materia[]>(`${this.baseUrl}/materias/${materia}`).pipe(
      map((materia) => {
        console.log(materia);
        return Object.values(materia);
      }
      ),
      catchError((error) => {
        console.error(error);
        return of([]);
      }
      )
    );
  }
  constructor(private http: HttpClient) { }
}
