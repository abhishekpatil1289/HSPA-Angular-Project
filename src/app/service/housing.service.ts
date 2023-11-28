import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';
import { IPropertyBase } from '../model/ipropertybase';



@Injectable({
  providedIn: 'root'
})
export class HousingService {
  // [x: string]: any;

  constructor(private http: HttpClient) { }

  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray => {
        // throw new Error( 'Some Error');
        return propertiesArray.find(p => p.Id === id)
      })
    );
  }


  getAllProperties(SellRent?: number): Observable<Property[]> {
    return this.http.get('data/properties.json').pipe(
      map((data: any) => {
        const propertiesArray: Array<Property> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp') || '{}');

        if (localProperties) {
          for (const id in localProperties) {
            if (SellRent) {
              if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent) {
                propertiesArray.push(localProperties[id]);
              }
            } else {
              propertiesArray.push(localProperties[id]);
            }
          }
        }

        for (const id in data) {
          if (SellRent) {
            if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
              propertiesArray.push(data[id]);
            }
          } else {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
    // This line is unreachable, you might want to remove it
    return this.http.get<Property[]>('data/properties.json');
  }

  addProperty(property: Property) {
    let newProp = [property];

    // Add new property in array if newProp already exists in local storage
    const storedNewProp = localStorage.getItem('newProp');
    if (storedNewProp) {
      newProp = [property, ...JSON.parse(storedNewProp)];
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    const storedPID = localStorage.getItem('PID');
    const currentPID = storedPID ? +storedPID : null;

    if (currentPID !== null && !isNaN(currentPID)) {
      localStorage.setItem('PID', String(currentPID + 1));
      return currentPID + 1;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}



