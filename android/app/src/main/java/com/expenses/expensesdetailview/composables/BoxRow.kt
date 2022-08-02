package com.expenses.expensesdetailview.composables

import androidx.compose.foundation.layout.*
import androidx.compose.material.Divider
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.expenses.expensesdetailview.theme.Colors
import com.expenses.expensesdetailview.theme.FontSizes
import com.expenses.expensesdetailview.theme.Sizes

@Composable
fun BoxRow(label: String, value: String, withDivider: Boolean = true) {
    Column {
        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
            Text(text = label, fontSize = FontSizes.text)
            Text(text = value, fontSize = FontSizes.largeText)
        }
        if(withDivider){
            Divider(modifier = Modifier.padding(vertical = Sizes.s8), color = Colors.subtitle)
        }
    }
}