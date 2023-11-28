import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId!: number;
  property = new Property();

  galleryOptions!: NgxGalleryOptions[];

  galleryImages!: NgxGalleryImage[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService
  ) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: any) => {
        this.property = data.prp;
      });


    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: Property | undefined) => {
    //         if (data) {
    //           this.property = data;
    //         }
    //       },
    //       // error => this.router.navigate(['/'])
    //     );
    //   }
    // );

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/Images/interior.jpg',
        medium: 'assets/Images/interior.jpg',
        big: 'assets/Images/interior.jpg'
      },
      {
        small: 'assets/Images/interior2.jpg',
        medium: 'assets/Images/interior2.jpg',
        big: 'assets/Images/interior2.jpg'
      },
      {
        small: 'assets/Images/interior3.jpg',
        medium: 'assets/Images/interior3.jpg',
        big: 'assets/Images/interior3.jpg'
      },
      {
        small: 'assets/Images/interior4.jpg',
        medium: 'assets/Images/interior4.jpg',
        big: 'assets/Images/interior4.jpg'
      },
      {
        small: 'assets/Images/interior5.jpg',
        medium: 'assets/Images/interior5.jpg',
        big: 'assets/Images/interior5.jpg'
      },
      {
        small: 'assets/Images/interior6.jpg',
        medium: 'assets/Images/interior6.jpg',
        big: 'assets/Images/interior6.jpg'
      }
    ];

  }

}

