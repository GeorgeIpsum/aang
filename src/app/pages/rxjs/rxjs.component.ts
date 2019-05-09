import { Component, OnInit } from '@angular/core';
import { Subject, AsyncSubject, BehaviorSubject, ReplaySubject, interval, merge } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  subject = new Subject();
  asyncSubject = new AsyncSubject();
  behaviorSubject = new BehaviorSubject('a');
  replaySubject = new ReplaySubject(2);
  subjects: any[] = [];
  log: any;

  constructor() { }

  ngOnInit() {
    this.subjects = [this.subject, this.asyncSubject, this.behaviorSubject, this.replaySubject];
    this.log = subjectType => e => console.log(`${subjectType}: ${e}`);

    console.log('S1');
    this.subject.subscribe(this.log('s1 subject'));
    this.asyncSubject.subscribe(this.log('s1 asyncsubject'));
    this.replaySubject.subscribe(this.log('s1 replay'));
    this.behaviorSubject.subscribe(this.log('s1 behavior'));

    console.log('\nNEXT(r)');
    this.subjects.forEach(o => o.next('r'));
  }

}
