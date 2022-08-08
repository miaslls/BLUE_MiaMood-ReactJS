import Api from "../helpers/Api";

const parseResponse = (response) => response.json;

const MoodService = {
  getAllMoods: () =>
    fetch(Api.allMoods(), { method: "GET" }).then(parseResponse),
  createMood: () =>
    fetch(Api.allMoods(), { method: "POST" }).then(parseResponse),
  moodsByDate: () =>
    fetch(Api.moodsByDate(), { method: "GET" }).then(parseResponse),
  moodsToday: () =>
    fetch(Api.moodsToday(), { method: "GET" }).then(parseResponse),
  searchMoods: () =>
    fetch(Api.searchMoods(), { method: "GET" }).then(parseResponse),
  moodById: () => fetch(Api.moodById(), { method: "GET" }).then(parseResponse),
  updateMood: () =>
    fetch(Api.updateMood(), { method: "GET" }).then(parseResponse),
  deleteMood: () =>
    fetch(Api.deleteMood(), { method: "GET" }).then(parseResponse),
};

export default MoodService;
