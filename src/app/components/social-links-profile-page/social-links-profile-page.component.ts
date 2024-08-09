import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-social-links-profile-page',
  templateUrl: './social-links-profile-page.component.html',
  styleUrl: './social-links-profile-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SocialLinksProfilePageComponent {

  // Path to Jessica's avatar image
  image_path_link : string = "images/avatar-jessica.jpeg";

  // Alternate text description for the avatar image
  image_description : string = "I have attached Jessica Avatar's image.";

  // First and last name of the profile owner
  first_name : string = "Jessica";
  last_name : string = "Randall";

  // Full name constructed from first and last names
  full_name = this.first_name +" "+ this.last_name;

  // Location details (city and country)
  place : string = "London";
  country : string = "United Kingdom";
  location = this.place+", "+this.country;

  // Role or job title
  role : string = "\"Front-end developer and avid reader.\"";

  // Array of social media links, each object contains a link name and URL
  social_links : any[] = [
    {
      "link_name": "Github",
      "link_url": "https://github.com/"
    },
    {
      "link_name": "Frontend Mentor",
      "link_url": "https://www.frontendmentor.io/"
    },
    {
      "link_name": "LinkedIn",
      "link_url": "https://www.linkedin.com/"
    },
    {
      "link_name": "Twitter",
      "link_url": "https://x.com/?lang=en"
    },
    {
      "link_name": "Instagram",
      "link_url": "https://www.instagram.com/"
    }
  ]

}
