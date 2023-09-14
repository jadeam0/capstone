<template>
    <button type="button" class="btn butt2" data-bs-toggle="modal" data-bs-target="#addUsers" data-bs-whatever="@addUser">Add User</button>

    <!--Modal-->
<div class="modal fade" id="addUsers" aria-hidden="true" aria-labelledby="addUsers" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-dark" id="addUsers">Add New User</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="registerUser">
            <div class="form-outline mb-4">
                <input type="text" v-model="payload.firstName" placeholder="Name" class="form-control"/>
            </div>
            <div class="form-outline mb-4">
                <input type="text" v-model="payload.lastName" placeholder="Surname" class="form-control"/>
            </div>
            <div class="form-outline mb-4">
                <input type="text" v-model="payload.userAge" placeholder="Age" class="form-control"/>
            </div>
            <div class="form-outline mb-4">
                <input type="text" v-model="payload.gender" placeholder="gender" class="form-control"/>
            </div>
            <div class="form-outline mb-4">
                <input type="email" v-model="payload.emailAdd" placeholder="Email" class="form-control"/>
            </div>
            <div class="form-outline mb-4">
                <input type="password" v-model="payload.userPW" placeholder="Password" class="form-control"/>
            </div>
            <div class="form-outline mb-4">
                <input type="password" v-model="payload.phone" placeholder="Password" class="form-control"/>
            </div>
            <div class="form-outline mb-4">
                <input type="text" v-model="payload.userProfile" class="form-control"/>
            </div>
            
        </form>
      </div>
      <div class="modal-footer">
       <button type="button" class="btn butt2" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn butt1" @click="registerUser">Add User</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    Name: 'AddUser',
    data() {
        return{
            payload: {
                firstName: '',
                lastName: '',
                userAge:'',
                gender:'',
                emailAdd:'',
                userPW:'',
                phone:'',
                userProfile:''
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
            this.$store.dispatch('registerUser', this.payload)
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