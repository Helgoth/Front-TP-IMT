<template>
  <!-- A COMPLETER -->
    
<div class="submit-form">   
    <!-- A INCLURE DANS LE FORM -->

<div v-if="currentPersonne">

        <div class="card" style="width: 18rem;">
          <input type="text" class="id" id="id" required v-model="currentPersonne.id"/>
        </div>

        <div class="card" style="width: 18rem;">
          <input type="text" class="name" id="name" required v-model="currentPersonne.name"/>
        </div>

        <div class="card" style="width: 18rem;">
          <input type="text" class="surname" id="surname" required v-model="currentPersonne.surname"/>
        </div>

        <div class="card" style="width: 18rem;">
          <input type="text" class="phone" id="phone" required v-model="currentPersonne.phone"/>
        </div>

        <div class="card" style="width: 18rem;">
          <input type="text" placeholder="Ville" class="city" id="city" required v-model="currentPersonne.city"/>
        </div>
</div>




    <button type="submit" class="badge badge-success mr-2"
      @click="updatePersonne"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg> Modifier </button>
    <p>{{ message }}</p>

 <!-- A INCLURE DANS LE FORM -->
    <button class="badge badge-danger mr-2"  
      @click="deletePersonne" 
    >

    <div role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg> Supprimer

</div>
      
    </button>

</div>
</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "personne",
  data() {
    return {
      currentPersonne: null,
      message: ''
    };
  },
  methods: {
    getPersonne(id) {
      // A COMPLETER
      PersonneDataService.get(id)
        .then(response => {
          this.currentPersonne = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePersonne() {
      // A COMPLETER
      PersonneDataService.update(this.currentPersonne)
        .then(response => {
          this.currentPersonne = response.data;
          this.message = 'Personne modifiée avec succès!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deletePersonne() {
      // A COMPLETER
      PersonneDataService.delete(this.currentPersonne.id)
        .then(response => {
          this.currentPersonne = response.data;
          this.$router.push({ name:"personnes" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getPersonne(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
