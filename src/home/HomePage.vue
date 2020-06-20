

<template>

    <div>
        
        <!--Here we know the user is already logged in and no need for validation before use state -->
        <h1>Hi {{account.user.firstName}}!</h1>
        <p>You're logged in with Vue + Vuex & JWT!!</p>
        <h3>Users from secure api end point:</h3>
        <em v-if="users.loading">Loading users...</em>
        <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
        <ul v-if="users.items">
           
            <li v-for="user in users.items" :key="user.id">
                
                <!--The User is able to delete own Account-->
                <span v-if="account.user.id===user.id">
                    
                     {{user.firstName + ' ' + user.lastName}}
                     
                     <span v-if="user.deleting"><em> - Deleting...</em></span>
                     <span v-else-if="user.deleteError" class="text-danger"> - ERROR: {{user.deleteError}}</span>
                     
                     - <a @click="deleteUser(user.id)" class="text-danger">Delete</a>
                 
                 </span>
                
                 <span v-if="account.user.id!=user.id">
                     {{user.firstName + ' ' + user.lastName}} 
                    
                </span>

              
            </li>
        </ul>
      
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        })
    }
};
</script>