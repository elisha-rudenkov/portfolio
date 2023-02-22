import { createStore } from "vuex";
export type State = {
  education: Education[];

  experience: Experience[];

  projects: Project[];
};

export type Education = {
  degree: string;
  institution: string;
  start_date: Timestamp;
  end_date: Timestamp | null;
};

export type Experience = {
  company: string;
  title: string;
  start_date: Timestamp;
  end_date: Timestamp | null;
  description: string[];
};

export type Project = {
  title: string;
  description: string;
  short_description: string;
  images: string[];
  mobile_images: string[];
  id: string;
  url: string;
  private: boolean;
  status: string;
  //github: string;

  //technologies: string[];
};

export type Timestamp = {
  seconds: number;
  nanoseconds: number;
};

export default createStore({
  state: {
    education: [] as Education[],
    experience: [] as Experience[],
    projects: [] as Project[],
  },
  getters: {},
  mutations: {
    addEducation(state, payload: Education) {
      //verify that the payload is not already in the array
      if (
        !state.education.some(
          (item) =>
            item.degree === payload.degree &&
            item.institution === payload.institution
        )
      ) {
        state.education.push(payload);
      }
    },
    addExperience(state, payload: Experience) {
      //verify that the payload is not already in the array
      if (
        !state.experience.some(
          (item) =>
            item.company === payload.company && item.title === payload.title
        )
      ) {
        state.experience.push(payload);
      }
    },
    addProject(state, payload: Project) {
      //verify that the payload is not already in the array
      if (!state.projects.some((item) => item.title === payload.title)) {
        state.projects.push(payload);
      }
    },
  },
  actions: {
    addEducation({ commit }, payload: Education) {
      commit("addEducation", { ...payload });
    },
    addExperience({ commit }, payload: Experience) {
      commit("addExperience", { ...payload });
    },  
    addProject({ commit }, payload: Project) {
      commit("addProject", { ...payload });
    },
  },
  modules: {},
});
