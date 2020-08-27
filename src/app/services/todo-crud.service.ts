import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoCrudService {

  constructor(public afs:AngularFirestore) { }

//Returns a collection from reference and adds information to the firestore databse
//returns a promise of out newly create data response

  create_Todo(todoName, todoDescription, todoCategory){
    return this.afs.collection('todo').add({
      todoName: todoName,
      todoDescription: todoDescription,
      todoCategory: todoCategory
    })
  }


  /**
   * 
   * No params needed
   * returns an Onservable of the doucument from the  firebase
   * collection and expose the document ID and raay od data points
   */
  retrieve_Todo(){
    return this.afs.collection('todo').snapshotChanges();
  }
  
  /**
  * 
  * @param todoId 
  *  * 
  * @param todoName 
  * @param todoDescription 
  * @param todoCategory 
  * 
  * Update given todo by its documentId and place newly
  * updates infrmation inside of the databse
  */
  //looking at the soecidic donument 
  update_Todo(todoId,todoName,todoDescription, todoCategory){
    this.afs.doc('todo/' + todoId).update({
      todoName: todoName,
      todoDescription: todoDescription,
      todoCategory: todoCategory
    })
  }

/**
 * 
 * @param todoId 
 * Delete given todo by its documetnID
 */
    delete_Todo(todoId){
      this.afs.doc('todo/' + todoId).delete()

    }


}
