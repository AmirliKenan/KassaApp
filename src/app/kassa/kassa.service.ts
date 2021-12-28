import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './models/api-response';
import { KassaPost } from './models/kassa-post';
import { KassaUpdate } from './models/kassa-update';
interface frontKass {
  info: string;
}
@Injectable({
  providedIn: 'root',
})
export class KassaService {
  baseApiUrl = 'http://btk.ddns.net:7777/accounting';

  constructor(private http: HttpClient) {}
  //get kassa
  getKassaList(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseApiUrl + '/api/v1/kassa');
  }
  getKassabyId(id: string): any {
    return this.http.get(this.baseApiUrl + `/api/v1/kassa/${id}`);
  }
  addKassa(data: string) {
    const addingKass: KassaPost = {
      info: data,
    };
    return this.http.post(this.baseApiUrl + '/api/v1/kassa', addingKass);
  }
  updateKassa(data: KassaUpdate) {
    const updatedData: KassaUpdate = {
      id: data.id,
      info: data.info,
    };
    return this.http.put(this.baseApiUrl + '/api/v1/kassa', updatedData);
  }
  kassaDelete(id: string): any {
    return this.http.delete(this.baseApiUrl + `/api/v1/kassa/${id}`);
  }
}
