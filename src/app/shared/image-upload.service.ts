import { Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage, uploadBytes } from '@angular/fire/storage';
import { from, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private storage: Storage) { }

  uploadImage(image: File, path: string):Observable<string>{
    const storageRef=ref(this.storage,path+image.name);
    const uploadT=from(uploadBytes(storageRef, image));
    return uploadT.pipe(
      switchMap((result)=> getDownloadURL(result.ref))
    );
  }
  //this.imageUploadService.uploadImage(event.target.files[0], 'image/book/${book.id}')
}
