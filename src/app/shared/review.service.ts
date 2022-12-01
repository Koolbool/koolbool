import { Injectable } from '@angular/core';
import { reviews } from './reviews';
import { addDoc, collectionData, doc, Firestore } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { deleteDoc, updateDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor( private fs: Firestore ) { }

  addReview(review: reviews){
    review.uid = doc(collection(this.fs, 'id')).id
    return addDoc(collection(this.fs, 'reviews'),review)
  }
  
  getReviews():Observable<reviews[]>{
    let reviewRef = collection(this.fs, 'reviews')
    return collectionData(reviewRef, {idField:'id'})as Observable<reviews[]>
  }

  deleteReview(review: reviews){
    let docRef = doc(collection(this.fs, `reviews/${review.uid}`));
    return deleteDoc(docRef)
  }
  
  updatereview(review: reviews, reviews: any){
    let docRef = doc(this.fs, `reviews/${review.uid}`);
    return updateDoc(docRef, reviews)
  }
}
