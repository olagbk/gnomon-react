import { Component, OnInit } from '@angular/core';
import { Email } from './email';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [`
    :host >>> .popover {
      background-color: rgba(0,0,0,0.9);
    }
    :host >>> .popover > .arrow:after {
      border-top-color: rgba(0,0,0,0.9);
    }
    :host >>> .popover > .popover-body {
      color: #f8f9fa
    }
    .button-wrapper {
      position: relative;
      width: fit-content;
      margin: auto;
    }
    .popover-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .submit-button:hover {
      background: transparent;
      color: #f8f9fa;
      border-color: #f8f9fa;
      cursor: pointer;
    }
    #message {
      height: 225px;
    }
    .ng-invalid.ng-touched[required]:not(re-captcha) {
      border-left: 6px solid #91232d;
    }
    .recaptcha {
      margin: 2rem 0;
      overflow: hidden;
    }
    .form-link {
      text-decoration: none;
    }
  `]
})
export class ContactFormComponent implements OnInit {
  model = new Email();
  submitted = false;
  captcha: string;
  formVisible = false;

  constructor() { }

  ngOnInit() {}

  sendEmail() {
    this.submitted = true;
  }
  toggleForm() {
    this.formVisible = !this.formVisible;
  }

}