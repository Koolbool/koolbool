import { Injectable } from '@angular/core';
import { Book } from './book';
import { addDoc, collectionData, doc, Firestore } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { deleteDoc, updateDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor( private fs: Firestore ) { }

  addBook(book: Book){
    book.id = doc(collection(this.fs, 'id')).id
    return addDoc(collection(this.fs, 'Books'),book)
  }
  
  getBooks():Observable<Book[]>{
    let bookRef = collection(this.fs, 'Books')
    return collectionData(bookRef, {idField:'id'})as Observable<Book[]>
  }

  deleteBook(book: Book){
    let docRef = doc(collection(this.fs, `Books/${book.id}`));
    return deleteDoc(docRef)
  }
  
  updateBook(book: Book, books: any){
    let docRef = doc(this.fs, `Books/${book.id}`);
    return updateDoc(docRef, books)
  }
}
