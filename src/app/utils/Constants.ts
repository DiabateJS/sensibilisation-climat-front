import { HttpHeaders } from '@angular/common/http';

export class Constants {
    public static URL_BASE: string = 'http://localhost:8080/';

    public static HTTP_OPTIONS = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        })
      };
}