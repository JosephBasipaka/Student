import { Component, IterableDiffers } from '@angular/core';
import { student } from '../student';
import { Students } from '../students';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students : student[] = Students;

  
}
