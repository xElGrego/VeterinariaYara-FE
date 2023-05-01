import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Note } from '../../models/note';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild('search') search!: ElementRef;
  @Input() notes!: Note[];

  displayColumns: string[] = ['position', 'title', 'date'];
  dataSource!: MatTableDataSource<Note>;

  constructor() {}
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    fromEvent<any>(this.search?.nativeElement, 'keyup')
      .pipe(
        map((event) => event.target.value.trim().toLowerCase()),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        this.dataSource.filter = text.trim().toLowerCase();
      });
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }
}
