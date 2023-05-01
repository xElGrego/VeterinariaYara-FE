import { Direction } from '@angular/cdk/bidi';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  isScreenSmall: boolean = false;
  isDarkTheme: boolean = false;

  mydir: Direction = 'ltr';

  constructor(
    private breakPointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breakPointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });
  }

  Navegar(ruta: string) {
    /* this.router.navigate(['/contactmanager'], { queryParams: { id: id } }); */
    console.log('click');

    this.router.navigate([ruta]);
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toogleDir() {
    this.mydir = this.mydir == 'ltr' ? 'rtl' : 'ltr';
    console.log('Dir', this.mydir);
  }
}
