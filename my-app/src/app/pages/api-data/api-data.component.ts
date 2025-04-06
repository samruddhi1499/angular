import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.scss'] 
})
export class ApiDataComponent implements OnInit {
  todos: any[] = [];

  constructor(private apiService: ApiService) {}



  ngOnInit() {
    this.apiService.getData().subscribe((data) => {
      this.todos = data as any[];
    });
  }
  
}
