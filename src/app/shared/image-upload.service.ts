import { Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage, uploadBytes } from '@angular/fire/storage';
import { from, Observable, switchMap } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private storage: AngularFireStorage) { }

  // store add review
  async uploadImage(event: any) {
    const file = event;
    const filePath = 'book/cover';
    const task = this.storage.upload(filePath, file);

    await task;
    this.storage.ref(filePath).getDownloadURL().subscribe(getDownloadURL => {
      console.log(`File is available at ${getDownloadURL}`);
    });
  }

  // uploadImage(image: File, path: string):Observable<string>{
  //   const storageRef=ref(this.storage,path+image.name);
  //   const uploadT=from(uploadBytes(storageRef, image));
  //   return uploadT.pipe(
  //     switchMap((result)=> getDownloadURL(result.ref))
  //   );
  // }


  //this.imageUploadService.uploadImage(event.target.files[0], 'image/book/${book.id}')
}
