import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EntryType } from '../interfaces/EntryType';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-newentry',
  templateUrl: './newentry.component.html',
  styleUrls: ['./newentry.component.scss']
})
export class NewentryComponent implements OnInit {
types:EntryType[]=[
  {  value:true,display:'Expense'},
  {  value:false,display:'Income'}
]
  constructor(private service:EntryService) { }
  entryForm=new FormGroup({
    description:new FormControl('',Validators.required),
    isExpense:new FormControl('',Validators.required),
    value:new FormControl('',[Validators.required,Validators.pattern('\\d+\\.?\\d*')])
  })
  OnSubmit(){
    console.log(this.entryForm.value);
    this.service.createEntry(this.entryForm.value).subscribe((datavalue)=>{
      console.log('Data - ',datavalue);
    })
  }

  ngOnInit(): void {
  }

}
