<template>
    <input type="text" class="form-control w-50 mx-auto m-5 shadow-sm" placeholder="Search..." id="searchinput" onkeyup="searchProduct()">

    <table class="table w-75 m-auto shadow-lg bg-danger text-light text-center rounded-3">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Image</th>
                <th>Edit/Delete</th>
            </tr>
        </thead>

        <tbody>
            <tr v-if="products">
                <td>{{product.prodID}}</td>
                <td>{{product.prodName}}</td>
                <td>{{product.catID}}</td>
                <td>{{product.prodPrice}}</td>
                <td>{{product.quantity}}</td>
                <td><img class="product-img" :src=product.prodUrl></td>
                <td>
                    <updateProduct :product="product" :prodID="prodID" />
                    <buton class="btn btn-danger" v-on:click="deleteProduct(product)">Delete</buton>
                    <buton class="btn btn-green" v-on:click="updateProduct(product.prodID)">Edit</buton>
                </td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    
}
</script>