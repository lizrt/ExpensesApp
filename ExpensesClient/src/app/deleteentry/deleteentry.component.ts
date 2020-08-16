import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EntryService } from '../entry.service';

import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-deleteentry',
  templateUrl: './deleteentry.component.html',
  styleUrls: ['./deleteentry.component.scss']
})
export class DeleteentryComponent implements OnInit {
  entry={
    value:0,
    description:'',
    isExpense:false
  }
id;
  constructor(private route:ActivatedRoute,
    private service:EntryService,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.service.getEntry(this.id).subscribe((data:any)=>{

      console.log("Data getentry ",data);
      this.entry.description=data.description;
this.entry.isExpense=data.isExpense;
this.entry.value=data.value;
    })
  }
  cancel(){
    this.router.navigate(['/'])
  }
  confirm(){
    this.service.deleteEntry(this.id).subscribe((data)=>{
      console.log("Data ",data);
      this.router.navigate(['/']);
    })
    console.log("confirm");
  }
}
