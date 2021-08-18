import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../recommendation.service';

@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  styleUrls: ['./additional-details.component.css']
})
export class AdditionalDetailsComponent {
languages:any=[]; Interests:any=[]; References:any=[]
  constructor(private language:RecommendationService, private Interest:RecommendationService,private Reference:RecommendationService) { 
    this.language.getAllLanguages().subscribe((data:any=[])=>{
      // console.warn(data);
      this.languages=data;
    } )
    this.Interest.getInterests().subscribe((data2:any=[])=>{
      // console.warn(data2);
      this.Interests=data2;
    })
    this.Reference.getAllReference().subscribe((data3:any=[])=>{
      console.warn(data3);
      this.References=data3;
    })

  }

 

}
