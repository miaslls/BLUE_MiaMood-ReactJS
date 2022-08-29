const MoodContext = {
  moodEndpoint: () => `${Api.baseUrl}/moods`,
  allMoods: () => MoodContext.moodEndpoint(),
  moodById: (id) => `${MoodContext.moodEndpoint()}/id/${id}`,
  createMood: () => `${MoodContext.moodEndpoint()}/`,
  updateMood: (id) => `${MoodContext.moodEndpoint()}/update/${id}`,
  deleteMood: (id) => `${MoodContext.moodEndpoint()}/delete/${id}`,
  todayMoods: () => `${MoodContext.moodEndpoint()}/date/today`,
  moodsByDate: (year, month, day) =>
    `${MoodContext.moodEndpoint()}/date?year=${year}&month=${month}&day=${day}`,
};

export const Api = {
  baseUrl: 'https://mialog-api.herokuapp.com',
  ...MoodContext,
};
