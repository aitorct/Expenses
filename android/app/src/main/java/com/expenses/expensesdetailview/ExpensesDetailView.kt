package com.expenses.expensesdetailview

import androidx.compose.ui.platform.ComposeView
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.uimanager.events.RCTEventEmitter
import com.expenses.expensesdetailview.composables.*

class ExpensesDetailView : SimpleViewManager<ComposeView>() {
    private var context: ReactContext? = null
    private var merchant: String = ""
    private var amount: String = ""
    private var date: String = ""
    private var userName: String = ""
    private var userEmail: String = ""
    private var comment: String = ""

    override fun getName() = "ExpensesDetailView"

    override fun createViewInstance(context: ThemedReactContext): ComposeView {
        this.context = context;

        return ComposeView(context).apply {

            fun onReceiptsButtonPress(): Unit {
                val reactContext = context as ReactContext
                val event: WritableMap = Arguments.createMap()

                reactContext.getJSModule(RCTEventEmitter::class.java).receiveEvent(id, "onReceiptsButtonPress", event)
            }

            setBackgroundColor(android.graphics.Color.WHITE)
            setContent {
                ExpensesDetailComposable(merchant, amount, date, userName, userEmail, comment) {onReceiptsButtonPress()}
            }
        }
    }

    override fun getExportedCustomDirectEventTypeConstants(): Map<String, Any>? {
        return MapBuilder.builder<String, Any>()
                .put("onReceiptsButtonPress",
                        MapBuilder.of("registrationName", "onReceiptsButtonPress"))
                .build()
    }

    @ReactProp(name = "merchant")
    fun setMerchant(view: ComposeView, merchant: String) {
        this.merchant = merchant;
    }

    @ReactProp(name = "amount")
    fun setAmount(view: ComposeView, amount: String) {
        this.amount = amount;
    }

    @ReactProp(name = "date")
    fun setDate(view: ComposeView, date: String) {
        this.date = date;
    }

    @ReactProp(name = "userName")
    fun setUserName(view: ComposeView, userName: String) {
        this.userName = userName;
    }

    @ReactProp(name = "userEmail")
    fun setUserEmail(view: ComposeView, userEmail: String) {
        this.userEmail = userEmail;
    }

    @ReactProp(name = "comment")
    fun setComment(view: ComposeView, comment: String) {
        this.comment = comment;
    }
}