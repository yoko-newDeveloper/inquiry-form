const app = new Vue({
    el: '#app',
    data: {
        errorMessage: 'Eメールが一致しません',
        formData: {
            name: '',
            email: '',
            re_email: '',
            content: '',
            toggle: true
        },
        regions: [
            '東北',
            '関東',
            '関西'
        ]
    }
})