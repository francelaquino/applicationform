import { Component, OnInit } from '@angular/core';
import { HttpService} from '../../services/http.service';
import { FormGroup,FormBuilder, FormControl,Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  form:FormGroup;
  requestDetail:any=[];
  paymentSchedule: any[];
  monthShortNames: any = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  constructor(private httpService:HttpService,private fb:FormBuilder,private route: ActivatedRoute) { }

  ngOnInit() {
    this.paymentSchedule=[];
    let id = this.route.snapshot.queryParams["id"];
    this.form= this.fb.group({
      completename: [''],
      civilstatus: [''],
      birthdate: [''],
      emailaddress: [''],
      mobileno: [''],
      purpose: [''],
      completeaddress: [''],
      tinno: [''],
      sssno: [''],
      employername: [''],
      workphone: [''],
      jobtitle: [''],
      maritalstatus: [''],
      salaryphp: [''],
      salaryper: [''],
      workaddress: [''],
      workdurationyear: [''],
      terms: [''],
      loanamount: [''],
      famcompleteaddress: [''],
      famemailaddress: [''],
      fammobileno: [''],
      famcompletename: [''],
      workdurationmonth: [''],
      comakercompletename: [''],
      comakermobileno: [''],
      comakeraddress: [''],
      comakerrelation: [''],
      comakertimeknown: [''],
      comakeremailaddress: [''],
      


      
      
    });
    this.httpService.getLoanApplication(id).subscribe(response => {
      this.requestDetail=response[0];
      if(this.requestDetail.civilstatus=="1"){
        this.requestDetail.civilstatus="Single";
      } else if(this.requestDetail.civilstatus=="2"){
        this.requestDetail.civilstatus="Married";
      }else if(this.requestDetail.civilstatus=="3"){
        this.requestDetail.civilstatus="Widowed";
      }else if(this.requestDetail.civilstatus=="5"){
        this.requestDetail.civilstatus="Separated";
      }else if(this.requestDetail.civilstatus=="6"){
        this.requestDetail.civilstatus="Divorce";
      }
      this.updateSchedule(this.requestDetail.dateapplied,Number(this.requestDetail.terms)*2);
      this.requestDetail.terms=this.requestDetail.terms+" month/s"

      this.form= this.fb.group({
        completename: [this.requestDetail.completename],
        civilstatus: [this.requestDetail.civilstatus],
        emailaddress: [this.requestDetail.emailaddress],
        mobileno: [this.requestDetail.mobileno],
        completeaddress: [this.requestDetail.comakeraddress],
        tinno: [this.requestDetail.tinno],
        sssno: [this.requestDetail.sssno],
        birthdate: [this.requestDetail.birthdate],
        maritalstatus: [this.requestDetail.maritalstatus],
        employername: [this.requestDetail.employername],
        workphone: [this.requestDetail.workphone],
        jobtitle: [this.requestDetail.jobtitle],
        salaryphp: [this.requestDetail.salaryphp],
        salaryper: [this.requestDetail.salaryper],
        workaddress: [this.requestDetail.workaddress],
        workdurationyear: [this.requestDetail.workdurationyear],
        terms: [this.requestDetail.terms],
        loanamount: [this.requestDetail.loanamount],
        purpose: [this.requestDetail.purpose],
        famcompleteaddress: [this.requestDetail.famcompleteaddress],
        famemailaddress: [this.requestDetail.famemailaddress],
        fammobileno: [this.requestDetail.fammobileno],
        famcompletename: [this.requestDetail.famcompletename],
        workdurationmonth: [this.requestDetail.workdurationmonth],
        comakercompletename: [this.requestDetail.comakercompletename],
        comakermobileno: [this.requestDetail.comakermobileno],
        comakeraddress: [this.requestDetail.comakeraddress],
        comakerrelation: [this.requestDetail.comakerrelation],
        comakertimeknown: [this.requestDetail.comakertimeknown],
        comakeremailaddress: [this.requestDetail.comakeremailaddress]
      
     });
    
     $('#form1 input').attr('readonly', 'readonly');
  });
}


updateSchedule(dateStart:string,terms:number) {
  let toDate = new Date(dateStart);
    let schedule = "";
    toDate.setDate(toDate.getDate() + 1);


    var i = 1;
    this.paymentSchedule = [];
    while (i <= terms) {
      toDate.setDate(toDate.getDate() + 15);
      schedule = `${toDate.getDate()}-${this.monthShortNames[toDate.getMonth()]}-${toDate.getFullYear()}`;
      this.paymentSchedule.push(schedule);
      i++;
    }

}

}
