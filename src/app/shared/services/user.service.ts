import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { User } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private userCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private storage: AngularFireStorage) {
    this.userCollection = afs.collection<User>('Users');
  }


  // works but needs to be improved
  addUser(u: any, img: any) {
    const file = img;

    this.afAuth.authState.subscribe(async user => {
      u.email = user?.email;

      // add the id to the filepath and add to storage
      let filePath = 'users/' + user?.uid + '/photoURL/' +  img.name;
      const task = this.storage.upload(filePath, file);

      await task;
      this.storage.ref(filePath).getDownloadURL().subscribe(getDownloadURL => {
        u.photoURL = getDownloadURL;
        this.userCollection.doc(user?.uid).set(u);
      });
    })
  }

}
