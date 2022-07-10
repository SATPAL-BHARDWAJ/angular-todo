import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  todoList: Array<TODO> = [];
  removedIds: Array<Number> = [];

  constructor() { }

  log(msg: string, extra: any = {})
  {
    console.log(`%c${msg}`, "color: green; font-size: 16px;", extra);
  }

  get todolist() {
    return this.get().filter((item: any) => !this.removedIds.includes(item['id']));
  }

  store(data: any) {
    data.map((item: any) => {
      item['done'] = false;
      item['date'] = new Date();
      item['id'] = this.getRandomId(1, 16478934);
    })

    let saveData = [
      ...this.get(),
      ...data
    ];
    this.log('savedata', {saveData, data})

    this.saveItem(saveData);
  }

  saveItem(data: any) {
    data = JSON.stringify(data);
    localStorage.setItem('todolist', data);
  }

  getRandomId(min: number, max: number) {
    let items = this.get();
    let id = 0;

    do {
      min = Math.ceil(min);
      max = Math.floor(max);
      id = Math.floor(Math.random() * (max - min + 1) + min);

    } while (items.find((item: any) => item['id'] == id));

    return id;
  }

  get(key?: string) {
    let data = localStorage.getItem((key ?? 'todolist')) || "[]";
    return JSON.parse(data);
  }

  removeAll() {
    localStorage.clear();
  }

  removeItem(id: number) {
    this.removedIds.push(id);
    console.log(this.removedIds)
    this.forceRemove(id);
  }

  forceRemove(id: number) {
    let items = this.get();
    items = items.filter((item: any) => item['id'] != id)

    this.saveItem(items);
  }

  done(id: number){
    let items = this.get();
    items.map((item: any) => {
      if (item['id'] == id) {
        item['done'] = !item['done'];
      }
    })

    this.saveItem(items);
  }
}

interface TODO {
  title: string,
  descr: string
}