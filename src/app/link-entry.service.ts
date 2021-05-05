import { Injectable } from '@angular/core';
import { LinkEntry, LinkEntryAdapter } from './models/link-entry';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinkEntryService {

  constructor(
    private linkEntryAdapter: LinkEntryAdapter,
    private http: HttpClient
  ) {}

  public get(): Observable<LinkEntry[]> {
    let url: string = environment.dataSource;
    return this.http.get(url).pipe(
      map((data: any) => data.map((entry: any) => this.linkEntryAdapter.toClient(entry)))
    );
  }
}
