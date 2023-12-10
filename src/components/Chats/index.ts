import data from "../../data";
import Block from "../../utils/Block";
import { ChatItem } from "../ChatItem";
import template from "./chats.hbs";

export class Chats extends Block {
   constructor(props) {
      super('div', props);
   }

   init() {
      this.children.ChatItem = new ChatItem({
         profiles: data.profiles
      })
   }

   render() {
      return this.compile(template, this.props)
   }
}
