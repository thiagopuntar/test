import axios from "axios";

export default class Service {
  constructor() {
    this.http = axios.create({
      baseURL: ""
    });
  }

  async listAllOffers() {
    return [
      { id: 1, name: "Abóbora", url: "https://www.google.com.", enabled: true }
    ];
    // return this.http.get("/admin/offers").then(res => res.data);
  }

  async save() {
    throw new Error("Oops");
  }
}
