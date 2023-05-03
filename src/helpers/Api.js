const MoodContext = {
  moodEndpoint: () => `${Api.baseUrl}/moods`,
  allMoods: () => MoodContext.moodEndpoint(),
  createMood: () => `${MoodContext.moodEndpoint()}/`,
  updateMood: (id) => `${MoodContext.moodEndpoint()}/update/${id}`,
  deleteMood: (id) => `${MoodContext.moodEndpoint()}/delete/${id}`,
};

export const Api = {
  baseUrl: 'https://miamood-02.fly.dev',
  ...MoodContext,
};
