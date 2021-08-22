import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import {Subject} from 'rxjs';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor(private service: UsersService) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  allUsers: any = [];

  ngOnInit() {
    this.users();
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  users(): void {
    this.service
        .users()
        .subscribe(response => {
          this.allUsers = response;
          this.dtTrigger.next();
        });
  }

}
