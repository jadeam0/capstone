<template>
    <button type="button" class="btn butt2" data-bs-toggle="modal" data-bs-target="#addCategory" data-bs-whatever="@addCategory">Add Category</button>

    <!--Modal-->
<div class="modal fade" id="addCategory" aria-hidden="true" aria-labelledby="addCategory" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-dark" id="addCategory">Add New Category</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addCategory">
            <div class="form-outline mb-4">
                <input type="text" v-model="payload.catName" placeholder="Name" class="form-control"/>
            </div>
        </form>
      </div>
      <div class="modal-footer">
       <button type="button" class="btn butt1" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn butt2" @click=" addCategory">Add User</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    Name: 'AddCategory',
    data() {
        return{
            payload: {
                catName:''
            }
        }
    },

    computed: {
        message() {
            return this.$store.state.message
        }
    },

    methods: {
        registerUser() {
            // console.log('Debug', this.payload);
            this.$store.dispatch('addCategory', this.payload)
        }
    }
}
</script>

<style>
.butt1,.butt2{
    background-color: #ff69b4;
    color: white;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
}
.butt2{
    background-color:#ffa500;
    color: #fff; 
    font-weight: bold;
}
.butt1:hover{
  background-color: #efa2c8

}
.butt2:hover{
  background-color: #f1ba54;
}
</style>