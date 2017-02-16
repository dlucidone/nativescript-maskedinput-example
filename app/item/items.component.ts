import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html",
})
export class ItemsComponent {

  @ViewChild("maskedInput") maskedInput: ElementRef;
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public data;

  submit() {
    let value = this.maskedInput.nativeElement;
    console.log(value.text);
    alert("Date of Birth - "+value.text);
  }
}
