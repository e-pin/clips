import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []

  register(id: string) {
    this.modals.push({id: id, visible: false});
  }

  unregister(id: string) {
    this.modals = this.modals.filter(elem => elem.id !== id);
  }
  
  constructor() { }

  public isModalOpen(id: string) : boolean {
    return !!this.modals.find(x => x.id === id)?.visible
    // same as
    //return Boolean(this.modals.find(x => x.id === id))
  }

  toggleModal(id: string) {
    const modal = this.modals.find(x => x.id === id);
    if(modal) {
      modal.visible = !modal.visible;
    }
  }
}
