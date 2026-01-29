const app = Vue.createApp({
    data: function() {
        return {
            cart:0,
            image: './assets/images/socks_green.jpg',
            product:'Socks',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', },
                { id: 2335, color: 'blue', image: './assets/images/socks_blue.jpg', },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})