(function () {

    function CardNew(name, price, category, discount = 0) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.discount = discount
        this.getDetails = function () {
            console.log(`Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`);
            return "a";
        }
        this.productCard = function () {
            discountedPrice = this.getDiscountedPrice()
            var card1 = document.createElement("div")
            card1.innerHTML = `<h1>Product Name ${this.name}</h1><h2>price is ${this.price}</h2><p>Category is Mobile ${this.category}.</p><h3>Discount is ${this.discount}% and discounted  Price is ${discountedPrice}</h3>`
            card1.classList.add("card8", "product-card")
            document.body.appendChild(card1)
            console.log("Product Card Method Called", this.price);
            return { productName: this.name, price: this.price };
        }
        this.maximumValueProduct = function (arr) {
        }
    }


    function Test(arr) {
        this.data = arr;
        this.getMax = function () {
            console.log("getMax Method Called", this.data);
            return Math.max(...this.data);
        }
    }

    var testData = new Test([30, 20, 1, 45]);
    // console.log("the test data is this",testData);

    CardNew.prototype.getDiscountedPrice = function () {
        console.log("Discounted Price Method Called");
        return this.price - (this.price * this.discount / 100);
    }

    var newdata = new CardNew("lamp", 200, "electronics", 20);
    newdata.getDetails();

    newdata.getDiscountedPrice();
    data1 = newdata.productCard();

    var newdata2 = new CardNew("mobile", 5000, "electronics", 30);
    data2 = newdata2.productCard();

    var newdata3 = new CardNew("laptop", 50000, "electronics", 40);
    data3 = newdata3.productCard();

    var newdata4 = new CardNew("jeans", 999, "electronics", 15);
    data4 = newdata4.productCard();




    const data = [data1, data2, data3, data4];

    const priceArray = data.map((item) => {
        return item.price;
    })

    console.log("the maximum product is this", testData.getMax.apply({ data: priceArray },));
    expensiveProduct = testData.getMax.apply({ data: priceArray },)

    element2 = document.createElement("div")
    element2.innerHTML = `<h1>Expensive Product is ${expensiveProduct}</h1>`
    document.body.appendChild(element2)





    // var element = document.getElementsByClassName("product-card");

    // for (var i = 0; i < element.length; i++) {
    //     element[i].addEventListener("mouseover", function () {
    //         this.style.transform = "scale(1.1)";
    //         this.style.transition = "all 0.3s ease-in-out";
    //     });

    //     element[i].addEventListener("mouseleave", function () {
    //         this.style.transform = "scale(1)";
    //         this.style.transition = "all 0.3s ease-in-out";
    //     });
    // }


})();