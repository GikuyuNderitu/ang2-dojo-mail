import { Component } from '@angular/core';
import { Mail } from './mails/mail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  mails : Array<Mail> = [
    new Mail("Bill@gates.com", true, "Hiring", "We want you greater than Uncle Sam does!"),
    new Mail("Jim@gates.com", true, "Hiring", "We want you greater than Uncle Sam does!"),
    new Mail("Lydia@gates.com", false, "Hiring", "I want you in bed WAY more than Uncle Sam does!"),
    new Mail("Rosie@gates.com", false, "Hiring", "We want you greater than Uncle Sam does!"),
    new Mail("Raymond@gates.com", false, "Hiring", "We want you greater than Uncle Sam does!"),
  ]
}
