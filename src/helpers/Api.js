const MoodContext = {
  moodEndpoint: () => `${Api.baseUrl}/moods`,
  allMoods: () => MoodContext.moodEndpoint(),
  todayMoods: () => `${MoodContext.moodEndpoint()}/date/today`,
  moodById: (id) => `${MoodContext.moodEndpoint()}/id/${id}`,
  createMood: () => `${MoodContext.moodEndpoint()}/`,
  updateMood: (id) => `${MoodContext.moodEndpoint()}/update/${id}`,
  deleteMood: (id) => `${MoodContext.moodEndpoint()}/delete/${id}`,
};

export const Api = {
  baseUrl: 'https://mialog-api.herokuapp.com',
  ...MoodContext,
};
