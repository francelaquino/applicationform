import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';
import {
  CommonService
} from '../../services/common.service';
import {
  HttpService
} from '../../services/http.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import {
  DataService
} from '../../services/data.service';
import { PatternValidator } from '@angular/forms/src/directives/validators';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-applicationform',
  templateUrl: './applicationform.component.html',
  styleUrls: ['./applicationform.component.css']
})
export class ApplicationformComponent implements OnInit {
  form: FormGroup;
  civilstatus: any = [];
  birthdate: string = "";
  signaturePadOptions: Object = {
    'canvasWidth': 500
  };
  monthShortNames: any = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  loanid: string = "";
  paymentSchedule: any[];




  constructor(private commonService: CommonService, private fb: FormBuilder, private httpService: HttpService, private dataService: DataService) {}






  updateSchedule() {
    if (this.form.get("terms").value != "") {
      let terms = Number(this.form.get("terms").value) * 2;
      let toDate = new Date();
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
  initForm() {
    localStorage.setItem("comakerSignature", "");
    localStorage.setItem("borrowerSignature", "");
    this.paymentSchedule = [];
    this.form = this.fb.group({
      completename: ['', Validators.required],
      civilstatus: ['', Validators.required],
      birthdate: ['', Validators.required],
      emailaddress: ['',[Validators.required]],
      mobileno: ['', Validators.required],
      completeaddress: ['', Validators.required],
      tinno: ['', Validators.required],
      sssno: ['', Validators.required],
      employername: ['', Validators.required],
      workphone: ['', Validators.required],
      jobtitle: ['', Validators.required],
      salaryphp: ['', Validators.required],
      salaryper: ['', Validators.required],
      workaddress: ['', Validators.required],
      workdurationyear: ['', Validators.required],
      terms: ['', Validators.required],
      loanamount: ['', Validators.required],
      famcompleteaddress: ['', Validators.required],
      famemailaddress: ['',[Validators.required, Validators.email]],
      fammobileno: ['', Validators.required],
      famcompletename: ['', Validators.required],
      workdurationmonth: ['', Validators.required],
      governmentid: ['', Validators.required],
      payslip: ['', Validators.required],
      employmentcertificate: ['', Validators.required],
      comakergovernmentid: ['', Validators.required],
      comakercompletename: ['', Validators.required],
      comakermobileno: ['', Validators.required],
      comakeraddress: ['', Validators.required],
      comakerrelation: ['', Validators.required],
      comakertimeknown: ['', Validators.required],
      comakeremailaddress: ['',[Validators.required, Validators.email]],
      purpose: ['', Validators.required],
      borrowersignature: [''],
      comakersignature: [''],
      promotions: [''],
      termsandagreement: [''],
      declaration: ['']





    });





  }

  continue () {
    $(".step1").hide();
    $(".step2").show();
  }

  fileChange(type: string, $event) {

    var extension = $event.target.files[0].name;
    var ext = extension.split('.').pop().toLowerCase();
    if ($.inArray(ext, ['jpg', 'png', 'bmp', 'pdf']) == -1) {
      if (type == "governmentid") {
        this.form.get('governmentid').setValidators([Validators.required]);
        this.form.get('governmentid').updateValueAndValidity();
      } else if (type == "payslip") {
        this.form.get('payslip').setValidators([Validators.required]);
        this.form.get('payslip').updateValueAndValidity();
      } else if (type == "employmentcertificate") {
        this.form.get('employmentcertificate').setValidators([Validators.required]);
        this.form.get('employmentcertificate').updateValueAndValidity();
      } else if (type == "comakergovernmentid") {
        this.form.get('comakergovernmentid').setValidators([Validators.required]);
        this.form.get('comakergovernmentid').updateValueAndValidity();
      }


      return false;
    }


    var fileName = $event.target.files.length;
    if (type == "governmentid") {
      if (fileName == "") {
        this.form.get('governmentid').setValidators([Validators.required]);
      } else {
        this.form.get('governmentid').clearValidators();
      }
      this.form.get('governmentid').updateValueAndValidity();
    } else if (type == "payslip") {
      if (fileName == "") {
        this.form.get('payslip').setValidators([Validators.required]);
      } else {
        this.form.get('payslip').clearValidators();
      }
      this.form.get('payslip').updateValueAndValidity();
    } else if (type == "employmentcertificate") {
      if (fileName == "") {
        this.form.get('employmentcertificate').setValidators([Validators.required]);
      } else {
        this.form.get('employmentcertificate').clearValidators();
      }
      this.form.get('employmentcertificate').updateValueAndValidity();
    } else if (type == "comakergovernmentid") {
      if (fileName == "") {
        this.form.get('comakergovernmentid').setValidators([Validators.required]);
      } else {
        this.form.get('comakergovernmentid').clearValidators();
      }
      this.form.get('comakergovernmentid').updateValueAndValidity();
    }




  }

  ngOnInit() {
  
    if(this.dataService.getConsentRead()!=true){
window.location.href="#/forms/consent";
      }
    //    var x = document.getElementById("parent").parentNode.parentElement.clientWidth;
    //  this.signaturePadOptions= {'canvasWidth': x-30};
    this.initForm();
    this.civilstatus = [];
    this.commonService.getcivilstatus().subscribe(response => {
      this.civilstatus = response;
    });
  }

  onResize(event) {
    var x = document.getElementById("parent").parentNode.parentElement.clientWidth;
    this.signaturePadOptions = {
      'canvasWidth': x - 30
    };
  }


  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  hasError(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSelectMethod(event) {
    let d = new Date(Date.parse(event));
    this.birthdate = `${d.getDate()}-${this.monthShortNames[d.getMonth()]}-${d.getFullYear()}`;
  }

  gotoApplicationDetails() {
    window.location.href = "#/application/request?id=" + this.loanid;
  }
  onCheckChange(obj: string, event) {
    if (obj == "termsandagreement") {
      if (event == true) {
        this.form.patchValue({
          termsandagreement: 'true',
        });
      } else {
        this.form.patchValue({
          termsandagreement: '',
        });
      }
    } else if (obj == "declaration") {
      if (event == true) {
        this.form.patchValue({
          declaration: 'true',
        });
      } else {
        this.form.patchValue({
          declaration: '',
        });
      }
    } else if (obj == "promotions") {
      if (event == true) {
        this.form.patchValue({
          promotions: 'true',
        });
      } else {
        this.form.patchValue({
          promotions: '',
        });
      }
    }



  }

  onSubmit() {
    this.form.patchValue({
      birthdate: this.birthdate,
      borrowersignature: localStorage.getItem("borrowerSignature"),
      comakersignature: localStorage.getItem("comakerSignature"),
    })


    if (localStorage.getItem("borrowerSignature") == "") {
      $("#signaturePadBorrower").addClass("requiredPad");
    }

    if (localStorage.getItem("comakerSignature") == "") {
      $("#signaturePadComaker").addClass("requiredPad");
    }



    if (this.form.valid) {

      if (localStorage.getItem("borrowerSignature") == "" || localStorage.getItem("comakerSignature") == "") {
        return false;
      }

      if (this.form.get("termsandagreement").value == "" || this.form.get("declaration").value == "") {
        alert("Please check terms and conditions checkbox");
        return false;
      }
      if (this.form.get("declaration").value == "") {
        alert("Please check the declaration checkbox");
        return false;
      }

      $("#btnsubmit").text("Please wait");
      $("#btnsubmit").attr("disabled", true);
      this.httpService.saveLoanApplication(this.form.value).subscribe(response => {



        var governmentid = $('#governmentid').get(0).files[0];
        var payslip = $('#payslip').get(0).files[0];
        var employmentcertificate = $('#employmentcertificate').get(0).files[0];
        var comakergovernmentid = $('#comakergovernmentid').get(0).files[0];

        this.loanid = response.loanid;

        let fData = new FormData();
        fData.append("governmentid", governmentid);
        fData.append("payslip", payslip);
        fData.append("loanid", response.loanid);
        fData.append("employmentcertificate", employmentcertificate);
        fData.append("comakergovernmentid", comakergovernmentid);

        this.httpService.saveLoanApplicationDocuments(fData).subscribe(response => {
          $(".step1").hide();
          $(".step2").show();
        });



      });

    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({
          onlySelf: true
        });
      });
    }
  }


}

