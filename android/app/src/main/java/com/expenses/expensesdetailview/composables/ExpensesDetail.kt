package com.expenses.expensesdetailview.composables

import androidx.compose.foundation.layout.*
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.expenses.R
import com.expenses.expensesdetailview.theme.FontSizes
import com.expenses.expensesdetailview.theme.Sizes

@Composable
fun ExpensesDetailComposable(merchant: String, amount: String, date: String, userName: String, userEmail: String, comment: String, onReceiptsButtonPress: () -> Unit) {
    Column(modifier = Modifier.padding(Sizes.s16), verticalArrangement = Arrangement.spacedBy(Sizes.s24)) {
        Header(amount, merchant, date)

        Column(verticalArrangement = Arrangement.spacedBy(Sizes.s16)) {
            CustomBox(title = stringResource(R.string.spent_by)) {
                BoxRow(label = stringResource(R.string.name), value = userName)
                BoxRow(label = stringResource(R.string.email), value = userEmail, withDivider = false)
            }

            CustomBox(title = stringResource(R.string.comment)) {
                Text(text = comment, fontSize = FontSizes.largeText)
            }

        }

        Row(modifier = Modifier.fillMaxWidth().fillMaxHeight(), horizontalArrangement = Arrangement.Center, verticalAlignment = Alignment.Bottom) {
            CustomButton(stringResource(R.string.share_transaction), onReceiptsButtonPress)
        }
    }
}

@Preview
@Composable
fun ExpensesDetailComposablePreview() {
    ExpensesDetailComposable("Amazon", "27.38€", "06/07/1996", "Aitor Cubeles Torres", "aitor.cubeles@utexas.edu", "This is an expense for the team!") {
        println("Button pressed!")
    }
}