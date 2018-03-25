import { Component, OnInit ,forwardRef ,ViewChild} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-signature-comaker',
  templateUrl: './signature-comaker.component.html',
  styleUrls: ['./signature-comaker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SignatureComakerComponent),
      multi: true,
    },
  ],
})
export class SignatureComakerComponent implements ControlValueAccessor {
  @ViewChild(SignaturePad) public signaturePad: SignaturePad;
  public options:  Object = {'canvasWidth': 500};

  public _signature: any = null;

  public propagateChange: Function = null;

  get signature(): any {
    return this._signature;
  }

  onResize(event) {
    var x = document.getElementById("parent").parentNode.parentElement.clientWidth;
    this.options= {'canvasWidth': x-30};
  }

  

  public writeValue(value: any): void {
    if (!value) {
      return;
    }
    this.signaturePad.fromDataURL(this.signature);
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(): void {
  }

  public ngAfterViewInit(): void {
    this.signaturePad.clear();
  }

  public drawBegin(): void {
    $("#signaturePadComaker").removeClass("requiredPad");
  }

  public drawComplete(): void {
    localStorage.setItem("comakerSignature",this.signaturePad.toDataURL()+"");
    

  }

  public clear(): void {
    this.signaturePad.clear();
    localStorage.setItem("comakerSignature","");
  }
}