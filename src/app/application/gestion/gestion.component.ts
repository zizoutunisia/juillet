import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Facture } from '../entities/facture.entity';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  idFacture:any;
  facture:Facture =new Facture();
  constructor(private currentRoute : ActivatedRoute, private http:HttpClient,private route : Router) { 
    this.currentRoute.params.subscribe(res=>{
      this.idFacture = res['id'];
      console.log(this.idFacture);
    })
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/facture/'+this.idFacture).subscribe(res=>{
      console.log(res);
      this.facture = <Facture>res
    })
  }

  update(){
    this.http.put('http://localhost:3000/facture/'+this.idFacture,this.facture).subscribe(res=>{
    this.route.navigate(['/'])
  })
  }

}
