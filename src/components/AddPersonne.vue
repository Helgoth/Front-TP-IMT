<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <!-- A COMPLETER -->

         <div class="card" style="width: 18rem;">
          <input type="text" placeholder="Nom" class="name" id="name" required v-model="personne.name" name="id"/>
        </div>

        <div class="card" style="width: 18rem;">
          <input type="text" placeholder="Prénom" class="surname" id="surname" required v-model="personne.surname" name="Prénom"/>
        </div>

        <div class="card" style="width: 18rem;">
          <input type="text" placeholder="Téléphone" class="phone" id="phone" required v-model="personne.phone" name="Téléphone"/>
        </div>

        <div class="card" style="width: 18rem;">
          <input type="text" placeholder="Ville" class="city" id="city" required v-model="personne.city" name="Ville"/>
        </div>



      <button @click="creerPersonne" class="btn btn-success" >Ajouter</button>
    </div>

    <div v-else>
      <h4>Personne ajoutée avec succès!</h4>
      <button class="btn btn-success" @click="resetForm">Ajouter une nouvelle personne</button>
    </div>
  </div>
</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "add-personne",
  data() {
    return {
      personne: {
        id: null,
        name: "",
        surname: "",
        phone: "",
        city: ""
      },
      submitted: false
    };
  },
  methods: {
    creerPersonne() {
      var data = {
        name: this.personne.name,
        surname: this.personne.surname,
        phone: this.personne.phone,
        city: this.personne.city,
        // A COMPLETER
      };

      // A COMPLETER
      PersonneDataService.create(data)
        .then(response => {
          this.currentPersonne = response.data;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    
    },
    
    resetForm() {
      this.submitted = false;
      this.personne = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
