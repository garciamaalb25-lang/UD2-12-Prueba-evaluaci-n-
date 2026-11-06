import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Film } from '../../interfaces/film-list-response';

@Component({
  imports: [RouterLink],
  selector: 'app-film-item-component',
  host: { class: 'col-md-4 col-lg-3 mb-4' },
  styleUrl: './film-item-component.css',
  templateUrl: './film-item-component.html',
})
export class FilmItemComponent {
  film = input<Film>();

  getFilmId(): string {
    return this.film()?.url.split('/')[5] ?? '';
  }
}
