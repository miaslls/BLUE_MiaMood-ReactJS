const MoodContext = {
  moodEndpoint: () => `${Api.baseUrl}/moods`,
  allMoods: () => `${MoodContext.moodEndpoint()}/`,
  createMood: () => `${MoodContext.moodEndpoint()}/`,
  moodsByDate: (query) => `${MoodContext.moodEndpoint()}/date?${query}`,
  moodsToday: () => `${MoodContext.moodEndpoint()}/date/today`,
  searchMoods: (query) => `${MoodContext.moodEndpoint()}/search?${query}`,
  moodById: (id) => `${MoodContext.moodEndpoint()}/id/${id}`,
  updateMood: (id) => `${MoodContext.moodEndpoint()}/update/${id}`,
  deleteMood: (id) => `${MoodContext.moodEndpoint()}/delete/${id}`,
};

export const Api = {
  baseUrl: "https://mialog-api.herokuapp.com",
  ...MoodContext,
};
