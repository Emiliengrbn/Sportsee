export class APIService {
  /**
   * @param { Number } id
   */
  constructor(id) {
    this.id = id;
  }

  /**
   * Récupère les données de l'utilisateur à partir de l'API
   * @returns { User }
   */
  getUser() {
    return fetch(`http://localhost:3000/user/${this.id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        return data.data;
      })
      .catch((error) => {
        console.error("Il y a eu un problème avec la requête Fetch:", error);
      });
  }

  /**
   *
   * @returns {UserActivity}
   */
  getUserActivity() {
    return fetch(`http://localhost:3000/user/${this.id}/activity`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        return data.data; // Retourne les données récupérées
      })
      .catch((error) => {
        console.error("Il y a eu un problème avec la requête Fetch:", error);
      });
  }

  /**
   *
   * @returns {UserSessions}
   */
  getUserAverageSession() {
    return fetch(`http://localhost:3000/user/${this.id}/average-sessions`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        return data.data; // Retourne les données récupérées
      })
      .catch((error) => {
        console.error("Il y a eu un problème avec la requête Fetch:", error);
      });
  }

  /**
   *
   * @returns {UserPerformance}
   */
  getUserPerformance() {
    return fetch(`http://localhost:3000/user/${this.id}/performance`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        return data.data; // Retourne les données récupérées
      })
      .catch((error) => {
        console.error("Il y a eu un problème avec la requête Fetch:", error);
      });
  }
}
