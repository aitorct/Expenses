//
//  NativeCameraViewController.swift
//  Expenses
//
//  Created by Aitor Cubeles Torres on 29/7/22.
//

import Foundation

enum NativeCameraError: Error {
  case getPhotoFile
  case savePhoto
}

class NativeCameraViewController: NSObject, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
  var presentationController: UIViewController?
  var onSuccess: RCTPromiseResolveBlock? = nil
  var onError: RCTPromiseRejectBlock? = nil
  
  public init(presentationController: UIViewController?) {
    super.init()
    self.presentationController = presentationController
  }
  
  func setCallbacks(onSuccess: @escaping RCTPromiseResolveBlock, onError: @escaping RCTPromiseRejectBlock) {
    self.onSuccess = onSuccess
    self.onError = onError
  }
  
  func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
    let fileManager = FileManager.default
    let documentsPath = fileManager.urls(for: .documentDirectory, in: .userDomainMask).first
    let randomUUID = UUID().uuidString
    
    if let onSuccess = self.onSuccess, let onError = self.onError {
      if let imagePath = documentsPath?.appendingPathComponent("expense_\(randomUUID).jpg") {
        if let pickedImage = info[UIImagePickerController.InfoKey.originalImage] as? UIImage {
          
          do {
            try pickedImage.jpegData(compressionQuality: 0.0)?.write(to: imagePath)
          } catch {
            onError("Error", "Could not save photo", NativeCameraError.savePhoto)
          }
          
          let result = imagePath.absoluteString
          onSuccess(result)
        }
      } else {
        onError("Error", "Could not get directory", NativeCameraError.getPhotoFile)
      }
    }
    
    presentationController?.dismiss(animated: true)
  }
}
