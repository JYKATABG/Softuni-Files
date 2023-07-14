import { Component, OnInit } from '@angular/core';
import { Database, onValue, ref, set } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'post-request-demo';

  constructor(public dataBase: Database) {}

  createBook(author: string, title: string) {
    set(ref(this.dataBase, 'books/romance/' + title), {
      author: author,
      title: title,
    });

    alert('Book created!');
  }

  ngOnInit(): void {
    const title = 'Do moeto purvo libe'
    const starCountRef = ref(this.dataBase, 'books/romance/' + title);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data.author);
    });
  }
}
