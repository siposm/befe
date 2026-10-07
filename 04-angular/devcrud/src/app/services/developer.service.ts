import { inject, Injectable } from '@angular/core';
import { Developer } from '../models/developer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';

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

	create(developer: Developer): Observable<void> {
		return this.http.post<void>(environment.developerCreateApiUrl, developer)
	}

	update(developer: Developer): Observable<void> {
		return this.http.put<void>(environment.developerUpdateApiUrl, developer)
	}

	delete(developer: Developer): Observable<void> {
		return this.http.delete<void>(environment.developerDeleteApiUrl, {
      headers: new HttpHeaders({"Content-Type": "application/json"}),
      body: { id: developer.id }
    })
	}
}
