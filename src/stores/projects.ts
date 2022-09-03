import { defineStore } from "pinia"

export interface Project {
    name: string;
    type: "project" | "blog";
    visible: boolean;
    description: string;
    location: string;
    tags: string[];
    image: string;
    date: string;
}

export const useProjectStore = defineStore("projects", {
    state: () => ({
        posts: <Project[]>[],
        content: <{ [id: string]: string }>{},
    }),
    getters: {
        blogs(state) {
            return state.posts.filter(p => p.type == "blog" && p.visible);
        },
        projects(state) {
            return state.posts.filter(p => p.type == "project" && p.visible);
        }
    },
    actions: {
        async refresh() {
            const res = await fetch("/api/projects.json");
            const posts = await res.json();

            this.posts.splice(0, this.posts.length, ...posts);
        },
        async refreshContent(project: Project) {
            if (this.content[project.location]) return;

            const text = await fetch(project.location)
                .then(res => res.text());

            this.content[project.location] = text;
        }
    }
})