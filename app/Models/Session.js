import Speaker from "./Speaker";
import { generateId } from "../Utils";

export default class Session {
  constructor({ id = generateId(), name, speakers, time }) {
    this.id = id;
    this.name = name;
    this.speakers = speakers.map(s => new Speaker(s));
    this.time = time;
  }
}
