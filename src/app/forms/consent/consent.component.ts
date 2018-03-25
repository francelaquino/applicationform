import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validators } from '@angular/forms';
import { DataService} from '../../services/data.service';
@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder,private dataService:DataService) { }

  ngOnInit() {
    this.form= this.fb.group({
      criteria: ['', Validators.required],
      agreement: ['', Validators.required],
    });
  }

  gotoApplicationForm(){
    this.dataService.setConsentRead(true);
    var displayDate = new Date().toLocaleDateString();
    window.location.href="#/forms/applicationform?id="+displayDate;

  }

}
