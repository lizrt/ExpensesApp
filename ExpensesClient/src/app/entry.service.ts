import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EntryService {
baseUrl : string ="https://localhost:5001/api/Entries/";
  constructor(private http:HttpClient) { }
  getAll(){
return this.http.get(this.baseUrl+'GetEntries');

  }
  getEntry(id){
    return this.http.get(this.baseUrl+'GetEntry/'+id);
    
      }
      deleteEntry(id){
        return this.http.delete(this.baseUrl+'DeleteEntry/'+id,{responseType: 'text'});
        
          }
  createEntry(entry){
    return this.http.post(this.baseUrl+'PostEntry',entry,{responseType: 'text'})
  }

  updateEntry(id,entry){
    return this.http.put(this.baseUrl+'UpdateEntry/'+id,entry,{responseType: 'text'})
  }
}
