import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmListResponse } from '../interfaces/film-list-response';
import { FilmDetailResponse } from '../interfaces/film-detail-response';

@Service()
export class FilmService {
  private http = inject(HttpClient);

  getAllFilms(): Observable<FilmListResponse> {
    return this.http.get<FilmListResponse>('https://swapi.dev/api/films/');
  }

  getOneFilm(id: string): Observable<FilmDetailResponse> {
    return this.http.get<FilmDetailResponse>(`https://swapi.dev/api/films/${id}/`);
  }
}
