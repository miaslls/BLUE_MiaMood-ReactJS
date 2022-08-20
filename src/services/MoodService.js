import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

export const MoodService = {
  getAllMoods: () =>
    fetch(Api.allMoods(), { method: "GET" }).then(parseResponse),

  getMoodById: (id) =>
    fetch(Api.moodById(id), { method: "GET" }).then(parseResponse),

  createMood: (body) =>
    fetch(Api.createMood(), {
      method: "POST",
      body: JSON.stringify(body),
      // mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseResponse),

  updateMood: (id, body) =>
    fetch(Api.updateMood(id), {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseResponse),

  deleteMood: (id) =>
    fetch(Api.deleteMood(id), { method: "DELETE" }).then(parseResponse),
};
