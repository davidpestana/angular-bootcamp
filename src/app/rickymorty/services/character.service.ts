import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characters$:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private page = 1;

  constructor(
    private http: HttpClient
  ) {
  }


  get characters(): Observable<any[]> {
    return this.characters$.asObservable();
  }

  get length(): Observable<Number> {
    return this.characters.pipe(map((data:any[]) => data.length));
  }

  clear() {
    this.page = 1;
    this.characters$.next([]);
    this.load();
  }

  load() {
      this.http.get(`https://rickandmortyapi.com/api/character/?page=${this.page}`)
      .pipe(map(({info, results}:any) => results))
      .subscribe(results => this.characters$.next(
        this.characters$.getValue().concat(results)
      ));
      this.page++;
  }

}
