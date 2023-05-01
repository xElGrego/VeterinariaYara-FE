import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { Direction } from '@angular/cdk/bidi';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  users!: User[];
  isScreenSmall: boolean = false;
  isDarkTheme: boolean = false;

  mydir: Direction = 'ltr';

  constructor(
    private breakPointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breakPointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
    this.loadAll();
  }

  async loadAll() {
    try {
      let response = await firstValueFrom(this.userService.loadAll());
      console.log('Response', response);
      this.users = response;
    } catch (error) {
      console.log('Error');
    }
  }

  Navegar(id: number) {
    this.router.navigate(['/contactmanager'], { queryParams: { id: id } });
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toogleDir() {
    this.mydir = this.mydir == 'ltr' ? 'rtl' : 'ltr';
    console.log('Dir', this.mydir);
  }
}
