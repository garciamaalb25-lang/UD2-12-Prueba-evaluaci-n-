import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FilmService } from '../../services/film-service';
import { FilmDetailResponse } from '../../interfaces/film-detail-response';

@Component({
  imports: [RouterLink],
  selector: 'app-film-item-page',
  styleUrl: './film-item-page.css',
  templateUrl: './film-item-page.html',
})
export class FilmItemPage {
  private route = inject(ActivatedRoute);
  private filmService = inject(FilmService);
  filmId = '';
  film = signal<FilmDetailResponse | undefined>(undefined);

  constructor() {
    this.route.params.subscribe((params) => {
      this.filmId = params['id'];
      this.filmService.getOneFilm(this.filmId).subscribe((resp) => {
        this.film.set(resp);
      });
    });
  }
}
