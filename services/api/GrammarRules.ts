const load = (level: number) => {
  return import(`./jsons/grammar_${level}`).then((module) => module.default);
};

export type Grammar = {
  type: "sw" | "sp";
  lesson: number;
  name: string;
  description: string;
  examples: string[];
  rules?: string[];
};

export default class GrammarRules {
  getAll() {}

  get(level: number): Promise<Grammar[]> {
    return load(level);
  }
}
