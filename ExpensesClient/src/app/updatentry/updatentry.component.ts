import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntryType } from '../interfaces/EntryType';
import { EntryService } from '../entry.service';
@Component({
  selector: 'app-updatentry',
  templateUrl: './updatentry.component.html',
  styleUrls: ['./updatentry.component.scss']
})
export class UpdatentryComponent implements OnInit {
  form: FormGroup;
  id: number;
  types: EntryType[] = [
    { value: true, display: 'Expense' },
    { value: false, display: 'Income' }
  ]

  constructor(private fb: FormBuilder,
    private dialogref: MatDialogRef<UpdatentryComponent>,
    @Inject(MAT_DIALOG_DATA) { description, isExpense, value, id }
    ,private service:EntryService) {

    this.id = id;
    this.form = fb.group({
      id:[id],
      description: [description, Validators.required],
      isExpense: [isExpense, Validators.required],
      value: [value, Validators.required]
    })
  }

  ngOnInit(): void {
  }
  close() {
   this.dialogref.close();

  }
  save() {
    
    console.log("save"+this.id );
    this.service.updateEntry(this.id,this.form.value).subscribe((data)=>{
      console.log("Data ",data);
    })
  }
}
