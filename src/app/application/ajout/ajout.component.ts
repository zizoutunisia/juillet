import { Component, OnInit } from '@angular/core';
import { Facture } from '../entities/facture.entity';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  facture: Facture = new Facture()
  constructor(private http:HttpClient,private route:Router) { }

  ngOnInit() {
  }

  save(){
    this.http.post('http://localhost:3000/factures',this.facture).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/']);
    })
  }

}
