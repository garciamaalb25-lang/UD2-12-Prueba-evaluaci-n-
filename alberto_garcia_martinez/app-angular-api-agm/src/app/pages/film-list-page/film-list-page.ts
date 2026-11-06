import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmService } from '../../services/film-service';
import { Film } from '../../interfaces/film-list-response';
import { FilmItemComponent } from '../../components/film-item-component/film-item-component';

@Component({
  imports: [FilmItemComponent],
  selector: 'app-film-list-page',
  styleUrl: './film-list-page.css',
  templateUrl: './film-list-page.html',
})
export class FilmListPage implements OnInit {
  private filmService = inject(FilmService);

  filmList = signal<Film[]>([]);

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe((resp) => {
      this.filmList.set(resp.results);
    });
  }
}
