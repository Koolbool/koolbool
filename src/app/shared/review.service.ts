import { Injectable } from '@angular/core';
import { addDoc, arrayUnion, collectionData, doc, Firestore, firestoreInstance$ } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { deleteDoc, updateDoc } from '@firebase/firestore';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Book } from './book';
import { reviews } from './reviews';
import firebase from 'firebase/compat/app'
@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor( private fs: AngularFirestore ) {

  }

  // add a review to the collection
  addReview(r: reviews, docId: string | null) {
    const docRef = this.fs.collection('Books').doc(docId as string);

    docRef.update({
      reviews: firebase.firestore.FieldValue.arrayUnion(r)
    })
  }

  // ------------

  // addReview(review: reviews){
  //   review.uid = doc(collection(this.fs, 'id')).id
  //   return addDoc(collection(this.fs, 'reviews'),review)
  // }
  
  // getReviews():Observable<reviews[]>{
  //   let reviewRef = collection(this.fs, 'reviews')
  //   return collectionData(reviewRef, {idField:'id'})as Observable<reviews[]>
  // }

  // deleteReview(review: reviews){
  //   let docRef = doc(collection(this.fs, `reviews/${review.uid}`));
  //   return deleteDoc(docRef)
  // }
  
  // updatereview(review: reviews, reviews: any){
  //   let docRef = doc(this.fs, `reviews/${review.uid}`);
  //   return updateDoc(docRef, reviews)
  // }
}
