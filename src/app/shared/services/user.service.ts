import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { User } from '@firebase/auth';
import { map, Observable, ReplaySubject, Subject, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private userCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private storage: AngularFireStorage, private router: Router) {
    this.userCollection = afs.collection<User>('Users');
  }


  // works but needs to be improved
  async addUser(u: any, img: any) {
    const file = img;

    this.afAuth.authState.subscribe(async user => {
      u.email = user?.email;

      // add the id to the filepath and add to storage
      let filePath = 'users/' + user?.uid + '/photoURL/' +  img.name;
      const task = this.storage.upload(filePath, file);

      await task;
      this.storage.ref(filePath).getDownloadURL().subscribe(getDownloadURL => {
        u.photoURL = getDownloadURL;
        this.userCollection.doc(user?.uid).set(u).then(() => {
          this.router.navigateByUrl('/dashboard/home');
        });
      })
    })
  }

  async hasUserCompletedFullSignup() {
    // need to make sure this includes the User interface in the future || works but maybe need to check if there is
    // something else I can use rather than display name in the future?
    return new Promise((resolve, reject) => {
      this.afAuth.authState.subscribe(user => {
        this.afs.collection('Users').doc(user?.uid).get().subscribe((e: any) => {
          if (e.data()?.displayName) {
            resolve(true);
          } else {
            reject(false);
          }
        })
      })
    }).catch((res) => {
      console.log(res);
    })
  }

}
