import { Component } from '@angular/core';
import { Announcement } from './announcement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  announcement: Announcement[] = [{
    message: "message: Hi",
    title: "Hoola",
    author: 'foxie⚡️',
    category: {id: "1", name: "foxie"}
  },
  {
    title:"blaaa",
    author: "꩜",
    message:"message: dasddasdsa",
    category: {id: "2", name: "asadadadsa"}
  },
  {
    title:"blabla",
    author: "🌪️",
    message:"message: dasddasdsa",
    category: {id: "3", name: "asadadadsa"}
  },
  {
    title:"blabla",
    author: "🌪️",
    message:"message: dasddasdsa",
    category: {id: "3", name: "asadadadsa"}
  }];
}
