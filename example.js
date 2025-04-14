         function calculateSavings() {
            const carPrices = {
                audi: 3000000,
                mercedes: 4000000,
                bmw: 3500000
            };

            const selectedCar = document.getElementById('car').value;
            const originalPrice = carPrices[selectedCar];
            const discount = 0.10; // 10%

            const savings = originalPrice * discount;
            const discountedPrice = originalPrice - savings;

            document.getElementById('result').innerText = 
                `Вы сэкономите: ${savings} руб. Цена со скидкой: ${discountedPrice} руб.`;
        } 