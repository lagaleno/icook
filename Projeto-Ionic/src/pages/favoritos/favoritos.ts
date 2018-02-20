import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProfilePage } from '../profile/profile';
import { ReceitaProvider } from '../../providers/receita/receita';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { Usuario } from '../../models/usuario';


/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {

	receitas = [];
  	usuario = new Usuario;
  	token: string;
  	i: number;

	constructor(public navCtrl: NavController, public storage: Storage, public navParams: NavParams, public userProv: UsuarioProvider, public receitaProv: ReceitaProvider) {
		this.usuario = this.userProv.getUsuario();
		this.storage.get('token')
	    .then(
	      (token) => {
	        this.token = token;
	        console.log(this.token);
	      }
	    );
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad FavoritosPage');
		this.usuarioWishlist();
	}

	closeFavoritos() {
		this.navCtrl.setRoot(ProfilePage);
	}

	usuarioWishlist() {
		this.receitaProv.usuarioWishlist(this.usuario.id)
		.subscribe(
			(res) => {
				console.log(res.receitasUsuario);
				this.i = 0;
              	while(this.i < res.receitasUsuario.length) {
                	this.receitas[this.i] = res.receitasUsuario[this.i];
                	this.i = this.i+1;
              	}
			}, (error) => {
				console.log(error);
			}
		);

	}

	removeWishlist(id: number) {
		this.receitaProv.removeWishlist(id, this.token)
		.subscribe(
			(res) => {
				console.log(res);
				this.ionViewDidLoad();
			}, (error) => {
				console.log(error);
			}
		);
	}	
}
