import { Component, OnInit } from '@angular/core';
import {EntryService} from '../entry.service'
import { MatTableDataSource } from '@angular/material/table';
import { EntryElement } from '../interfaces/EntryElement';
import { MatDialog } from '@angular/material/dialog';
import { UpdatentryComponent } from '../updatentry/updatentry.component';
@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  columnsToDisplay:string[]=["Description","IsExpense","Value","Actions"]
  dataSource;
  constructor(private service:EntryService,
    private dialog : MatDialog) { }

  ngOnInit(): void {
  this.service.getAll().subscribe((data)=>{
    console.log("RESULT - ",data);
    this.dataSource=new MatTableDataSource<EntryElement>(data as EntryElement[])
  })
  }
  updateEntry(entry){
    console.log(entry);
    this.dialog.open(UpdatentryComponent,{
      data:{
        description:entry.description,
        isExpense:entry.isExpense,
        value:entry.value,
        id:entry.id
      }})
  }
  //console.log(description);
}
