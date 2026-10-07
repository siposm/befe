import { inject, Injectable } from '@angular/core';
import { Developer } from '../models/developer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

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
		return this.http.get<Developer[]>(environment.developerGetApiUrl)
	}

	create(developer: Developer): Observable<void> {
		return this.http.post<void>(environment.developerCreateApiUrl, developer)
	}

	update(developer: Developer): void {
		this.http.put(environment.developerUpdateApiUrl, developer).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("UPDATE request result: ", response)
        // update in local array
        let index = this.developers.findIndex(x => x.id === developer.id)
        this.developers[index] = developer
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("UPDATE request result: ", error)
      }
    })
	}

	findById(id: string): Developer {
		return this.developers.find(dev => dev.id === id) as Developer
	}

	delete(developer: Developer): void {
		this.http.delete(environment.developerDeleteApiUrl, {
      headers: new HttpHeaders({"Content-Type": "application/json"}),
      body: {
        id: developer.id
      }
    }).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("DELETE request result: ", response)
        // delete from local array
        this.developers = this.developers.filter(x => x.id !== developer.id)
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("DELETE request result: ", error)
      }
    })
	}
}
