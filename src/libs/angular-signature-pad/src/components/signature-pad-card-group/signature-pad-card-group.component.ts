import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {SignaturePadControlComponent} from '../signature-pad-control/signature-pad-control.component';

@Component({
  selector: 'signature-pad-card-group',
  templateUrl: './signature-pad-card-group.component.html',
  providers: []
})
export class SignaturePadCardGroupComponent implements OnInit {

  @Input()
  theme: string;

  @Input()
  group: AbstractControl;

  @Input()
  config: any;

  control: FormControl;

  @ViewChild('signaturePad')
  signaturePadControl: SignaturePadControlComponent;

  constructor() {

  }

  ngOnInit() {
    this.control = this.group.get(this.config.name) as FormControl;
  }

  clear() {
    this.signaturePadControl.clear();
  }

}
