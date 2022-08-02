package com.expenses.expensesdetailview.composables

import androidx.compose.foundation.layout.Column
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import com.expenses.expensesdetailview.theme.FontSizes

@Composable
fun Header(amount: String, merchant: String, date: String) {
    Column {
        Text(
                text = amount,
                style = TextStyle(fontSize = FontSizes.main),
                fontWeight = FontWeight.Bold
        )
        Text(
                text = merchant,
                style = TextStyle(fontSize = FontSizes.title),
        )
        Text(
                text = date,
                style = TextStyle(fontSize = FontSizes.largeText)
        )
    }
}