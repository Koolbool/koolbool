import { Injectable } from '@angular/core';
import { Book } from './book';
import { addDoc, collectionData, doc, Firestore } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { deleteDoc, updateDoc } from '@firebase/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // WORKS
  private booksCollection: AngularFirestoreCollection<Book>;
  books: Observable<Book[]>;

  constructor( private fs: AngularFirestore ) {
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
  addBook(b: Book) {
    this.booksCollection.add(b).then((e) =>  console.log(e))
  }


  // -------------------

  // constructor(private fs : AngularFirestore) {}

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
