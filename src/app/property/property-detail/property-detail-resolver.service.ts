import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/service/housing.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property> {

  constructor(private housingService: HousingService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Property> | Property {
    const propId = route.params['id'];

    return this.housingService.getProperty(+propId).pipe(
      map((property: any) => {
        if (property) {
          return property;
        } else {
          this.router.navigate(['/']);
        }
      }),
      catchError(() => {
        this.router.navigate(['/']);
        return of(new Property()); // Using of from rxjs to return an observable
       })
    );
  }
}
