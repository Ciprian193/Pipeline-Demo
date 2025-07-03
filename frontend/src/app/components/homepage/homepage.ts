import { Component } from '@angular/core';
import {ApiService} from '../../services/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class HomepageComponent {

  protected title: string = "Homepage";
  protected message: string = "";

  constructor(private readonly api: ApiService) { }

  ngOnInit(): void {
    this.api.getHello().subscribe({
      next: (data) => this.message = data,
      error: (error) => this.message = error.message
    })
  }
}
