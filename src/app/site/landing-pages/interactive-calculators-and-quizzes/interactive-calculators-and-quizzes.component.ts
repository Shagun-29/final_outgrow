import { Component, OnInit } from '@angular/core';
import { CalcService } from '../../../shared/service/calc.service';
import { Title } from '@angular/platform-browser';
import { Http } from '@angular/http';

@Component({
  selector: 'app-interactive-calculators-and-quizzes',
  templateUrl: './interactive-calculators-and-quizzes.component.html',
  styleUrls: ['./interactive-calculators-and-quizzes.component.css']
})
export class InteractiveCalculatorsAndQuizzesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
