import { Injectable } from '@angular/core';
//
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private camera: Camera) { }
  capturePhoto(val){
    const options: CameraOptions = {
      quality: 40,
      sourceType: val == 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      correctOrientation: true
    }
    return this.camera.getPicture(options);
  }
  captureProfilePhoto(val){
    const options: CameraOptions = {
      quality: 40,
      sourceType: val == 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    return this.camera.getPicture(options);
  }
}
