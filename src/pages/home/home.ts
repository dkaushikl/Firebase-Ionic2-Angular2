import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, AlertController, ToastController, LoadingController   } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { SigninPage } from '../signin/signin';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  message: string;
  books: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,  public alertCtrl: AlertController, public storage: Storage, public angFire: AngularFire, public toastCtrl: ToastController) {
    this.books = angFire.database.list('/Books');
  }

  // setData() {
  //   this.storage.set('First', 'Kaushik');
  //   console.log("srorage run");
  // };
  // getData() {
  //   this.storage.get('First').then((val) => {
  //     console.log('Your name is', val);
  //   })
  // };
  addbook(): void {
    let prompt = this.alertCtrl.create({
      title: 'Add Book',
      message: 'Add the book title and author',
      inputs: [
        {
          name: 'title',
          placeholder: "Book Title"
        },
        {
          name: 'author',
          placeholder: "Book Author"
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log("cancel clicked");
          }
        },
        {
          text: 'Save Book',
          handler: data => {
            let loader = this.loadingCtrl.create({
              content: "Please wait...",
              duration: 3000
            });
            loader.present();
            this.books.push({
              title: data.title,
              author: data.author
            });
          let toast = this.toastCtrl.create({
            message: "Successfully inserted data",
            duration: 3000
          });
          toast.present();
          }
        }
      ]
    });
    prompt.present();
  }
  editBook(book): void {
    let prompt = this.alertCtrl.create({
      title: 'Edit Book',
      message: 'Edit the book title and author',
      inputs: [
        {
          name: 'title',
          placeholder: book.title
        },
        {
          name: 'author',
          placeholder: book.author
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log("cancel clicked");
          }
        },
        {
          text: 'Save Book',

          handler: data => {

            let newTitle:String = book.title;
            let newAuthor:String = book.author;

            if(data.title != '')
            {
              newTitle = data.title;
            }
            if(data.author != ''){
                newAuthor = data.author;
            }
            this.books.update(book.$key, {
              title: newTitle,
              author: newAuthor
            })
          }
        }
      ]
    });
    prompt.present();
  }
  deleteBook(bookID): void {
    let prompt = this.alertCtrl.create({
      title: 'Delete Book',
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Delete Book',
          handler: data => {
            this.books.remove(bookID);
          }
        }
      ]
    });
    prompt.present();
  }
}
