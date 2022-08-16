import { Api } from "helpers/Api";

const parseResponse = (response) => response.json();

export const MoodService = {
  getAllMoods: () =>
    fetch(Api.allMoods(), { method: "GET" }).then(parseResponse),
  getMoodById: (id) =>
    fetch(Api.moodById(id), { method: "GET" }).then(parseResponse),
  createMood: (mood) =>
    fetch(Api.createMood(), {
      method: "POST",
      body: JSON.stringify(mood),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(parseResponse),
  // moodsByDate: () =>
  //   fetch(Api.moodsByDate(), { method: "GET" }).then(parseResponse),
  // moodsToday: () =>
  //   fetch(Api.moodsToday(), { method: "GET" }).then(parseResponse),
  // searchMoods: () =>
  //   fetch(Api.searchMoods(), { method: "GET" }).then(parseResponse),
  // updateMood: () =>
  //   fetch(Api.updateMood(), { method: "GET" }).then(parseResponse),
  // deleteMood: () =>
  //   fetch(Api.deleteMood(), { method: "GET" }).then(parseResponse),
};
