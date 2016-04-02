"use strict";
var Product = (function () {
    function Product(image) {
        this.image = image;
        this.liked = false;
        this.likes = 0;
    }
    Product.prototype.addLikes = function () {
        this.liked = true;
        this.likes++;
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map