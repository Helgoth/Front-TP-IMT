<template>
  <!-- A COMPLETER -->
    
    <!-- A INCLURE DANS LE FORM -->
    <button class="badge badge-danger mr-2"
      @click="deletePersonne"
    >
      Supprimer
    </button>

    <!-- A INCLURE DANS LE FORM -->

   <div v-if="currentPersonne">

    Nom<input type="text" class="name" id="name" v-model="currentPersonne.name" />
    Prenom<input type="text" class="surmane" id="surmane" v-model="currentPersonne.surname" />
    phone<input type="text" class="phone" id="phone" v-model="currentPersonne.phone" />
    Ville<input type="text" class="city" id="city" v-model="currentPersonne.city" />

    </div>


    <button type="submit" class="badge badge-success"
      @click="updatePersonne"
    >
      Modifier
    </button>
    <p>{{ message }}</p>

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
