import { Component, OnInit } from '@angular/core';
import { Episode } from '../model/Episode';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-componente-teste',
  templateUrl: './componente-teste.component.html',
  styleUrls: ['./componente-teste.component.css']
})
export class ComponenteTesteComponent implements OnInit {

  listEpisodios: Episode[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.service.getAllEpisodios().subscribe((resp)=> {
      this.listEpisodios = resp.results;
      console.log(this.listEpisodios)
    });
    
  }

}
