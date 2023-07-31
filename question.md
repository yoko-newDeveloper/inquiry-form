3.条件分岐でDOM表示を制御する[v-if]

「どちらかのフォームが未入力の場合は表示させない」
[index.html]の通りに修正して記述していきたいと思っています。

`<p class="alert_color" v-if="formData.email !== formData.emailConfirm">{{ errorMessage }}</p> `

のあたりに書くと思ていますが、このコードの上下に書いてもうまく表示ができません。
具体的にどこに、どの部分を修正（もしくは追記）すればいいのか教えていただけますか。
