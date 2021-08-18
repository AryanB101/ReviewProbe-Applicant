import { Component, OnInit } from '@angular/core';
import {RecommendationService} from '../recommendation.service';

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.css']
})
export class CareerDetailsComponent {
 industries:any=[];  roles:any=[]
  constructor(private industry:RecommendationService, private role:RecommendationService) {
    this.industry.getIndustrySuggestion().subscribe((data:any=[])=>{
      // console.warn(data);
      this.industries=data;
    })
    this.role.getPreferredRole().subscribe((data2:any=[])=>{
      // console.warn(data2);
      this.roles=data2;
    })
   }

   
}
