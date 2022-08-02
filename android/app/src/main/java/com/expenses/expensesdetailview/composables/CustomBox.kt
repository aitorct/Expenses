package com.expenses.expensesdetailview.composables

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.TextStyle
import com.expenses.expensesdetailview.theme.Colors
import com.expenses.expensesdetailview.theme.FontSizes
import com.expenses.expensesdetailview.theme.Sizes

@Composable
fun CustomBox(title: String, content: @Composable() () -> Unit) {
    Column(
            modifier = Modifier
                    .fillMaxWidth()
                    .background(color = Colors.background, shape = RoundedCornerShape(Sizes.s12))
                    .padding(Sizes.s16)
    ) {
        Text(text = title, style = TextStyle(fontSize = FontSizes.smallText), color = Colors.subtitle, modifier = Modifier.padding(bottom = Sizes.s8))
        content()
    }
}