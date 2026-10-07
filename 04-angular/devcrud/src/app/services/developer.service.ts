import { inject, Injectable } from '@angular/core';
import { Developer } from '../models/developer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

	// Service feladata:
	// - HTTP kérés felépítése
	// - endpointok
	// - adatok transzformálása
	// - közös API/error logika

	// Component feladata:
	// - mikor indítsuk el
	// - siker után mit mutassunk
	// - navigáció
	// - UI frissítése

	developers: Developer[] = []
	http = inject(HttpClient)

	getDevelopers(): Observable<Developer[]> {
		return this.http
			.get<Developer[]>(environment.developerGetApiUrl)
			.pipe(
				map(data =>
					data.map(x => Object.assign(new Developer(), x))
				)
			)
	}

	create(developer: Developer): Observable<ApiResponse> {
		return this.http.post<ApiResponse>(environment.developerCreateApiUrl, developer)
	}

	update(developer: Developer): Observable<ApiResponse> {
		return this.http.put<ApiResponse>(environment.developerUpdateApiUrl, developer)
	}

	delete(developer: Developer): Observable<ApiResponse> {
		return this.http.delete<ApiResponse>(environment.developerDeleteApiUrl, {
      headers: new HttpHeaders({"Content-Type": "application/json"}),
      body: { id: developer.id }
    })
	}
}
