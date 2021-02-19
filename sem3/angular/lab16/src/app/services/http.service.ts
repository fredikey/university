import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl: string = 'http://localhost:3000';
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  private getUrl(url: string): string {
    return this.baseUrl + url;
  }

  public get<T>(url: string) {
    return this.http.get(this.getUrl(url)).toPromise() as Promise<T>;
  }
  public post<T>(url: string, body: object) {
    return this.http.post(this.getUrl(url), body).toPromise() as Promise<T>;
  }
  public patch<T>(url: string, body: object) {
    return this.http.patch(this.getUrl(url), body).toPromise() as Promise<T>;
  }
  public delete<T>(url: string) {
    return this.http.delete(this.getUrl(url)).toPromise() as Promise<T>;
  }
}
