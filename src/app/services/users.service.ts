import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { delay, map } from 'rxjs';

interface State {
  users: User[],
  loading: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  // El # equivale a colocar private
  // ej: #name == private name
  #state = signal<State>({
    loading: true,
    users: []
  })

  // En lugar de acceder a la variable privada #state cuando se inyecte
  // el servicio, accedemos mejor a señales computadas 
  public users = computed( () => this.#state().users )
  public loading = computed( () => this.#state().loading )

  constructor() {
    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(1500))
      .subscribe( res => {
        this.#state.set({
          loading: false,
          users: res.data
        })
      });
    
   }

  getUserByID(id: string){
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500),
        map( res => res.data )
      )
      
  }
}
