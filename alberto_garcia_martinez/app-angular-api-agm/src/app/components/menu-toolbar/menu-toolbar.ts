import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-menu-toolbar',
  styleUrl: './menu-toolbar.css',
  templateUrl: './menu-toolbar.html',
})
export class MenuToolbar {}
