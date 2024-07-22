import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
// import {faYoutube}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;

  constructor() { }

  ngOnInit(): void {
  }

}
