package com.expenses.expensesdetailview.composables

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import com.expenses.expensesdetailview.theme.Colors
import com.expenses.expensesdetailview.theme.FontSizes
import com.expenses.expensesdetailview.theme.Sizes

@Composable
fun CustomButton(text: String, action: () -> Unit) {
    Button(onClick = action, contentPadding = PaddingValues(vertical = Sizes.s8, horizontal = Sizes.s16), colors = ButtonDefaults.buttonColors(backgroundColor = Colors.buttonBackground), shape = RoundedCornerShape(Sizes.s12)) {
        Text(text = text, color = Colors.text, fontSize = FontSizes.title)
    }
}