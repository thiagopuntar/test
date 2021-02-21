import axios from "axios";
export default class Service {
  constructor() {
    this.http = axios.create({
      baseURL: "http://localhost:3000/api/v1"
    });
  }

  async listAllOffers() {
    return this.http.get("/offers/all").then(res => res.data);
  }

  async save(offer) {
    return this.http.post("/offers", offer).then(res => res.data);
  }

  async getById(id) {
    return this.http.get(`/offers/${id}`).then(res => res.data);
  }

  async remove(id) {
    return this.http.delete(`/offers/${id}`).then(res => res.data);
  }

  async changeStatus(offerId, newStatus) {
    return this.http
      .post(`/offers/changeStatus/${offerId}`, { disable: newStatus })
      .then(res => res.data);
  }
}
