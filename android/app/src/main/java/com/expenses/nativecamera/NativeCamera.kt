package com.expenses.nativecamera

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import android.os.Environment
import android.provider.MediaStore
import androidx.core.content.FileProvider
import androidx.core.content.PermissionChecker.PERMISSION_GRANTED
import androidx.core.content.PermissionChecker.checkSelfPermission
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.PermissionAwareActivity
import com.facebook.react.modules.core.PermissionListener
import java.io.File
import java.util.*


class NativeCamera : ReactContextBaseJavaModule {
    private companion object {
        const val REQUEST_IMAGE_CAPTURE = 1
        const val CAMERA_PERMISSION_CODE = 100
    }

    constructor(reactContext: ReactApplicationContext) : super(reactContext) {
        reactContext.addActivityEventListener(mActivityEventListener);
    }

    override fun getName() = "NativeCamera"

    private lateinit var photoTakenPromise: Promise
    private lateinit var photoUri: Uri

    private val mActivityEventListener: ActivityEventListener = object : BaseActivityEventListener() {
        override fun onActivityResult(activity: Activity, requestCode: Int, resultCode: Int, intent: Intent?) {
            if (requestCode == REQUEST_IMAGE_CAPTURE) {
                if (resultCode == Activity.RESULT_CANCELED) {
                    photoTakenPromise.reject("Error", "User cancelled")
                } else if (resultCode == Activity.RESULT_OK) {
                    photoTakenPromise.resolve(photoUri.toString())
                }
            }
        }
    }

    private fun createImageFile(): File? {
        val uuid: String = UUID.randomUUID().toString()
        val storageDir: File? = reactApplicationContext.getExternalFilesDir(Environment.DIRECTORY_PICTURES)?.absoluteFile

        storageDir ?: return null

        return File.createTempFile(
                "expense_${uuid}",
                ".jpg",
                storageDir
        )
    }

    @ReactMethod
    fun takePhoto(promise: Promise) {
        val activity = reactApplicationContext.currentActivity

        activity?.let {
            photoTakenPromise = promise

            val cameraIntent = Intent(MediaStore.ACTION_IMAGE_CAPTURE)

            val photoFile: File? = createImageFile()
            photoFile?.let { file ->
                photoUri = FileProvider.getUriForFile(
                        reactApplicationContext,
                        "com.expenses.fileprovider",
                        file
                )

                cameraIntent.putExtra(MediaStore.EXTRA_OUTPUT, photoUri)
                it.startActivityForResult(cameraIntent, REQUEST_IMAGE_CAPTURE)
            }?: run {
                promise.reject("Error", "File could not be created")
            }
        } ?: run {
            promise.reject("Error", "Activity not found")
        }
    }

    @ReactMethod
    fun isPermissionGranted(promise: Promise) {
        val status = checkSelfPermission(reactApplicationContext.applicationContext, Manifest.permission.CAMERA) == PERMISSION_GRANTED
        promise.resolve(status)
    }

    @ReactMethod
    fun requestPermission(promise: Promise) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) return promise.resolve(true)

        val activity = reactApplicationContext.currentActivity
        if (activity is PermissionAwareActivity) {
            val listener = PermissionListener { requestCode: Int, _: Array<String>, grantResults: IntArray ->
                if (requestCode == CAMERA_PERMISSION_CODE) {
                    val permissionStatus = if (grantResults.isNotEmpty()) grantResults[0] else PackageManager.PERMISSION_DENIED
                    promise.resolve(permissionStatus == PERMISSION_GRANTED)
                    return@PermissionListener true
                }
                return@PermissionListener false
            }

            activity.requestPermissions(arrayOf(Manifest.permission.CAMERA), CAMERA_PERMISSION_CODE, listener)
        } else {
            promise.resolve(false)
        }
    }
}