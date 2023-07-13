// export default RiderService;

import axios from 'axios';

class RiderService {
  static serverURL = 'http://localhost:9000';

  // Get all Riders
  static getAllRiders(active) {
    const dataURL = `${this.serverURL}/Rider`;

    if (active) {
      // Add active filter query parameter
      return axios.get(dataURL, { params: { active } });
    }

    return axios.get(dataURL);
  }

  // Get single Rider
  static getRider(riderId) {
    const dataURL = `${this.serverURL}/Rider/${riderId}`;
    return axios.get(dataURL);
  }

  // Create Rider
  static createRider(add) {
    const dataURL = `${this.serverURL}/Rider`;
    return axios.post(dataURL, add);
  }

  // Update Rider
  static updateRider(add, riderId) {
    const dataURL = `${this.serverURL}/Rider/${riderId}`;
    return axios.put(dataURL, add);
  }

  // Delete Rider
  static deleteRider(riderId) {
    const dataURL = `${this.serverURL}/Rider/${riderId}`;
    return axios.delete(dataURL);
  }
}

export default RiderService;
