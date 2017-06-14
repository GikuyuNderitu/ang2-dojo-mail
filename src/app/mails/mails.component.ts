import { Component, OnInit, Input } from '@angular/core';
import { Mail } from './mail';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.sass']
})
export class MailsComponent implements OnInit {

  @Input() mails: Array<Mail>;

  constructor() { }

  ngOnInit() {
  }

}
