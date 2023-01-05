import { Injectable } from '@angular/core';
import { Book } from './book';
import { addDoc, collectionData, doc, Firestore } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { deleteDoc, updateDoc } from '@firebase/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // WORKS
  private booksCollection: AngularFirestoreCollection<Book>;
  books: Observable<Book[]>;

  constructor( private fs: AngularFirestore, private storage: AngularFireStorage) {
    this.booksCollection = fs.collection<Book>('Books');
    this.books = this.booksCollection.valueChanges();
  }

  // gets all books
  getBooks() {
    return this.booksCollection.valueChanges({idField: 'id'})
  }

  // gets a specific book with id
  getBook(docId: any) {
    return this.fs
      .collection('Books')
      .doc(docId)
      .valueChanges();
  }

  // add a book to the collection
  async addBook(b: Book, e: any) {
    const file = e;
    const filePath = 'book/' + b.bookname + '/' + e.name;
    const task = this.storage.upload(filePath, file);

    await task;
    this.storage.ref(filePath).getDownloadURL().subscribe(getDownloadURL => {
      b.bookimgurl = getDownloadURL;
      b.createdDate = new Date();
      this.booksCollection.add(b).then((e) => console.log(e));
    });

    // this.booksCollection.add(b).then((e) =>  console.log(e));
  }


  // -------------------

  // getBooks(lastBook?: Book): Observable<Book[]> {
  //   let query = this.fs.collection<Book>('Books', ref => ref.limit(1));
  //   // if (lastBook) {
  //   //   query = query.startAfter(lastBook);
  //   // }
  //   return query.valueChanges();
  // }
  // addBook(book: Book){
  //   book.id = doc(collection(this.fs, 'id')).id
  //   return addDoc(collection(this.fs, 'Books'),book)
  // }
  
  // getBooks():Observable<Book[]>{
  //   let bookRef = collection(this.fs, 'Books')
  //   return collectionData(bookRef, {idField:'id'})as Observable<Book[]>
  // }

  // deleteBook(book: Book){
  //   let docRef = doc(collection(this.fs, `Books/${book.id}`));
  //   return deleteDoc(docRef)
  // }
  
  // updateBook(book: Book, books: any){
  //   let docRef = doc(this.fs, `Books/${book.id}`);
  //   return updateDoc(docRef, books)
  // }

  // updateBookData(book: Book){

  // }
}
