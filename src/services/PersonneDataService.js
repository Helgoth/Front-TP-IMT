import http from "../http-common";


class PersonneDataService {
  //Fonction pour récupérer l'ensemble des personnes (GET)
  getAll() {
    return http.get("/entree");
  }

//Fonction pour récupérer une personne via son ID (GET)
  get(id) {
    return http.get(`/entree/${id}`);
  }

//Fonction pour créer une nouvelle personne (POST)
//data représente les données du formulaire (nom, prénom, téléphone, ville)
  create(data) {
    return http.post("/entree", data);
  }

  // A COMPLETER

  update(data) {
      return http.put("/entree", data);  
  }

  delete(id){
      return http.delete(`/entree/${id}`);
  }


}

export default new PersonneDataService();
