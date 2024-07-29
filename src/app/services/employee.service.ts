import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'https://ng.somee.com/api/employee';
  // baseUrl = 'https://localhost:7258/api/employee';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  postEmployee(employee: any) {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }



  // addPerson(person: any): Observable<void> {
  //   return this.http.post<void>(`${environment.personApiBaseUrl}/person`, person);
  // }
}
