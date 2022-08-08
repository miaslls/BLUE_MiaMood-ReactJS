"use strict";

const MoodContext = {
  moodEndpoint: () => `${Api.baseUrl}/moods`,
  allMoods: () => `${MoodContext.moodEndpoint()}/`,
  createMood: () => `${MoodContext.moodEndpoint()}/`,
  moodsByDate: () => `${MoodContext.moodEndpoint()}/date?${query}`,
  moodsToday: () => `${MoodContext.moodEndpoint()}/date/today`,
  searchMoods: () => `${MoodContext.moodEndpoint()}/search?${query}`,
  moodById: () => `${MoodContext.moodEndpoint()}/id/${id}`,
  updateMood: () => `${MoodContext.moodEndpoint()}/update/${id}`,
  deleteMood: () => `${MoodContext.moodEndpoint()}/delete/${id}`,
};

const Api = {
  baseUrl: "http://localhost:3001",
  ...MoodContext,
};

export default Api;
