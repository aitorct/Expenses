//
//  NativeCamera.swift
//  Expenses
//
//  Created by Aitor Cubeles Torres on 29/7/22.
//

import Foundation
import AVFoundation

@objc(NativeCamera)
class NativeCamera: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool { return true }
  let camera = NativeCameraViewController(presentationController: (UIApplication.shared.windows.first?.rootViewController))
  
  @objc func takePhoto(
    _ resolve: @escaping RCTPromiseResolveBlock,
    reject: @escaping RCTPromiseRejectBlock
  ) -> Void {
    DispatchQueue.main.async {
      let rootViewController = UIApplication.shared.windows.first?.rootViewController
      
      if let viewController = rootViewController {
        if(UIImagePickerController.isSourceTypeAvailable(.camera)) {
          let imagePicker = UIImagePickerController()
          imagePicker.delegate = self.camera
          imagePicker.sourceType = .camera;
          imagePicker.allowsEditing = false
          
          self.camera.setCallbacks(onSuccess: resolve, onError: reject)
          
          viewController.present(imagePicker, animated: true)
        } else {
          let title = NSLocalizedString("camera_not_available_title", comment: "UIAlertController title")
          let message = NSLocalizedString("camera_not_available_description", comment: "UIAlertController title message")
          let action = NSLocalizedString("camera_not_available_action", comment: "UIAlertController action")
          
          let alertController: UIAlertController = UIAlertController(title: title, message: message, preferredStyle: .alert)
          let dismissAction: UIAlertAction = UIAlertAction(title: action, style: .cancel)
          alertController.addAction(dismissAction)
          
          viewController.present(alertController, animated: true)
        }
      }
      
    }
  }
  
  @objc func isPermissionGranted(
    _ resolve: @escaping RCTPromiseResolveBlock,
    reject: @escaping RCTPromiseRejectBlock
  ) -> Void {
    let result = AVCaptureDevice.authorizationStatus(for: .video) ==  .authorized
    resolve(result)
  }
  
  @objc func requestPermission(
    _ resolve: @escaping RCTPromiseResolveBlock,
    reject: @escaping RCTPromiseRejectBlock
  ) -> Void {
    AVCaptureDevice.requestAccess(for: .video, completionHandler: { (granted: Bool) in
      resolve(granted)
    })
  }
}

