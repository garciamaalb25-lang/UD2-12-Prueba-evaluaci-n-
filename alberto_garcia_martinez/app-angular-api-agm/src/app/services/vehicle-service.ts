import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleListResponse } from '../interfaces/vehicle-list-response';
import { VehicleDetailResponse } from '../interfaces/vehicle-detail-response';

@Service()
export class VehicleService {
  private http = inject(HttpClient);

  getAllVehicles(): Observable<VehicleListResponse> {
    return this.http.get<VehicleListResponse>('https://swapi.dev/api/vehicles/');
  }

  getOneVehicle(id: string): Observable<VehicleDetailResponse> {
    return this.http.get<VehicleDetailResponse>(`https://swapi.dev/api/vehicles/${id}/`);
  }
}
