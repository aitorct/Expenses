package com.expenses.expensesdetailview

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext

class ExpensesDetailViewPackage : ReactPackage {
    override fun createNativeModules(context: ReactApplicationContext) = emptyList<NativeModule>()
    override fun createViewManagers(context: ReactApplicationContext) = listOf(
            ExpensesDetailView()
    )
}