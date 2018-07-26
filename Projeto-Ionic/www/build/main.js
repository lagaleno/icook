webpackJsonp([10],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaIngredientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_receita_receita__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receita_receita__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BuscaIngredientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuscaIngredientesPage = (function () {
    function BuscaIngredientesPage(navCtrl, navParams, receitaProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.receitaProv = receitaProv;
        this.searchQuery = '';
        this.receitas = [];
        this.dificuldadeAsc = [];
    }
    BuscaIngredientesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuscaIngredientesPage');
        this.getReceitaDificuldadeAsc();
        this.initializeReceitas();
    };
    BuscaIngredientesPage.prototype.getReceitaDificuldadeAsc = function () {
        var _this = this;
        this.receitaProv.getReceitaDificuldadeAsc()
            .subscribe(function (res) {
            _this.i = 0;
            while (_this.i < res.receita.length) {
                _this.dificuldadeAsc[_this.i] = res.receita[_this.i];
                _this.i = _this.i + 1;
            }
            _this.initializeReceitas();
            //console.log(this.dificuldadeAsc);
        }, function (error) {
            console.log(error);
        });
    };
    BuscaIngredientesPage.prototype.setReceita = function (id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade) {
        this.receitaProv.setReceita(id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__receita_receita__["a" /* ReceitaPage */]);
    };
    //Searchbar
    BuscaIngredientesPage.prototype.initializeReceitas = function () {
        this.receitas = this.dificuldadeAsc;
    };
    BuscaIngredientesPage.prototype.getReceita = function (ev) {
        // Reset items back to all of the items
        this.initializeReceitas();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.receitas = this.receitas.filter(function (item) {
                return (item.ingredientes.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    BuscaIngredientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-busca-ingredientes',template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\busca-ingredientes\busca-ingredientes.html"*/'<!--\n  Generated template for the BuscaIngredientesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Busque Ingredientes</ion-title>\n  </ion-navbar>\n  <ion-searchbar placeholder="Buscar pelo Ingrediente" (ionInput)="getReceita($event)"></ion-searchbar>\n\n</ion-header>\n\n<ion-content padding class="fundo">\n\n	<ion-list class="lista">\n		<button ion-item *ngFor="let receita of receitas" (click)="setReceita(receita.id, receita.nome, receita.descricao, receita.ingredientes, receita.tempo_preparo, receita.rendimento, receita.dificuldade)" class="texto-botao" color="light">\n			{{ receita.nome }}\n		</button>  \n	</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\busca-ingredientes\busca-ingredientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_receita_receita__["a" /* ReceitaProvider */]])
    ], BuscaIngredientesPage);
    return BuscaIngredientesPage;
}());

//# sourceMappingURL=busca-ingredientes.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //Provider para fazer o login
/**
 * Generated class for the CadastroModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroModalPage = (function () {
    function CadastroModalPage(navCtrl, navParams, view, userProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.userProv = userProv;
        this.avisoErro = false;
    }
    CadastroModalPage.prototype.closeCadastroModal = function () {
        this.view.dismiss();
    };
    CadastroModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroModalPage');
    };
    CadastroModalPage.prototype.cadastro = function (name, email, password) {
        var _this = this;
        this.userProv.cadastro(name, email, password) //chamo a função login que criei na minha provider
            .subscribe(function (res) {
            console.log(res);
            _this.view.dismiss(); //Após fazer o cadastro voltar para página de login
        }, function (error) {
            _this.avisoErro = true;
            _this.erroEmail = error.error.errors.email[0];
            console.log(error.error);
        });
    };
    CadastroModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-modal',template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\cadastro-modal\cadastro-modal.html"*/'<!--\n\n  Generated template for the CadastroModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n  <ion-navbar color="secondary">\n\n    <ion-title> Crie sua Conta</ion-title>\n\n    <ion-buttons end>\n\n    	<button ion-button (click)="closeCadastroModal()">Fechar</button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="fundo">\n\n  \n\n  <div class="componentesModal">\n\n  	<h5 class="titulo"> Preencha com seus Dados: </h5>\n\n  	<form id="space">\n\n  		<ion-item>\n\n  	    	<ion-label>Nome</ion-label>\n\n  	        <ion-input #name type="text"name="name"></ion-input>\n\n        	</ion-item>\n\n\n\n      	<ion-item>\n\n  	        <ion-label>E-mail</ion-label>\n\n  	        <ion-input #email type="email"name="email"></ion-input>\n\n        	</ion-item>\n\n\n\n        	<ion-item>\n\n  	        <ion-label>Senha</ion-label>\n\n  	        <ion-input #password type="password" name="password"></ion-input>\n\n        	</ion-item>\n\n        <button ion-button (click)="cadastro(name.value, email.value, password.value)" full type="submit" color="danger" class="submit"  block>Criar Conta</button>\n\n    </form>\n\n    <button ion-button block outline class="texto-botao">Esqueci minha senha</button>\n\n  </div>\n\n\n\n  <div *ngIf="avisoErro">\n\n    {{ erro }}\n\n    <p class="erro-texto"> Dados de cadastro invalidos </p>\n\n  </div>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\cadastro-modal\cadastro-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], CadastroModalPage);
    return CadastroModalPage;
}());

//# sourceMappingURL=cadastro-modal.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_receita_receita__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_receita__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__receita_receita__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AtualizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarModalPage = (function () {
    function EditarModalPage(navCtrl, navParams, view, receitaProv, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.receitaProv = receitaProv;
        this.storage = storage;
        this.receita = new __WEBPACK_IMPORTED_MODULE_4__models_receita__["a" /* Receita */];
        this.storage.get('token')
            .then(function (token) {
            _this.token = token;
            console.log(_this.token);
        });
    }
    EditarModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarModalPage');
        this.receita = this.receitaProv.getReceita();
        console.log(this.receita);
    };
    EditarModalPage.prototype.closeEditarModal = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */]);
    };
    EditarModalPage.prototype.atualizaReceita = function (nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade) {
        var _this = this;
        this.receitaProv.atualizaReceita(this.receita.id, this.token, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade)
            .subscribe(function (res) {
            console.log(res);
            _this.receitaProv.setReceita(_this.receita.id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__receita_receita__["a" /* ReceitaPage */]);
        }, function (error) {
            console.log(error);
        });
    };
    EditarModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-modal',template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\editar-modal\editar-modal.html"*/'<!--\n  Generated template for the EditarModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Editar: {{receita.nome}}</ion-title>\n    <ion-buttons end>\n    	<button ion-button (click)="closeEditarModal()">Fechar</button>\n    </ion-buttons> \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="fundo">\n	\n  	<form class="space">\n  		<ion-item>\n  	    <ion-label>Título</ion-label>\n  	     <ion-input #nome type="text"name="name" value={{receita.nome}}></ion-input>\n      </ion-item>\n\n      	<ion-item>\n  	        <ion-label>Descrição</ion-label>\n  	        <ion-textarea #descricao type="textearea" name="descricao" value={{receita.descricao}}></ion-textarea>\n        	</ion-item>\n\n        	<ion-item>\n  	        <ion-label>Ingredientes</ion-label>\n  	        <ion-textarea #ingredientes type="textarea" name="ingredientes" value={{receita.ingredientes}}></ion-textarea>\n        	</ion-item>\n\n          <ion-item>\n            <ion-label>Tempo em min</ion-label>\n            <ion-input #tempoPreparo type="text" name="tempo" value={{receita.tempo_preparo}}></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Rendimento</ion-label>\n            <ion-input #rendimento type="text" name="rendimento" value={{receita.rendimento}}></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Dificuldade</ion-label>\n            <ion-input #dificuldade type="text" name="dificuldade" value={{receita.dificuldade}}></ion-input>\n          </ion-item>\n\n        	<button ion-button (click)="atualizaReceita(nome.value, descricao.value, ingredientes.value, tempoPreparo.value, rendimento.value, dificuldade.value)" block class="texto-botao" color="danger">Editar\n          </button>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\editar-modal\editar-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_receita_receita__["a" /* ReceitaProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], EditarModalPage);
    return EditarModalPage;
}());

//# sourceMappingURL=editar-modal.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_receita_receita__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_receita__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RemoveModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RemoveModalPage = (function () {
    function RemoveModalPage(navCtrl, navParams, view, receitaProv, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.receitaProv = receitaProv;
        this.storage = storage;
        this.receita = new __WEBPACK_IMPORTED_MODULE_4__models_receita__["a" /* Receita */];
        this.receita = this.receitaProv.getReceita();
        this.storage.get('token')
            .then(function (token) {
            _this.token = token;
            console.log(_this.token);
        });
    }
    RemoveModalPage.prototype.closeRemoveModal = function () {
        this.view.dismiss();
    };
    RemoveModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RemoveModalPage');
    };
    RemoveModalPage.prototype.deletaReceitaPerfil = function () {
        var _this = this;
        this.receitaProv.deletaReceitaPerfil(this.receita.id, this.token)
            .subscribe(function (res) {
            console.log(res);
            _this.view.dismiss();
        }, function (error) {
            console.log(error);
        });
    };
    RemoveModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-remove-modal',template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\remove-modal\remove-modal.html"*/'<!--\n\n  Generated template for the RemoveModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Apagar Receita</ion-title>\n\n    <ion-buttons end>\n\n    	<button ion-button (click)="closeRemoveModal()">Fechar</button>\n\n    </ion-buttons> \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="fundo">\n\n	\n\n	<div class="componentesModal">\n\n		<h5 class="titulo">Tem certeza?</h5>\n\n		<p style="text-align:center"> A receita <span style="color:#BD322B">{{ receita.nome }}</span> será deletada do aplicativo, quer continuar com essa ação?</p>\n\n	</div>\n\n\n\n	<ion-row>\n\n		<ion-col width-50 style="text-align: right">\n\n       		<button ion-button class="texto-botao" (click)="closeRemoveModal()">Não apagar</button>\n\n     	</ion-col>     \n\n     	<ion-col width-50 style="text-align: left">\n\n      		<button ion-button  (click)="deletaReceitaPerfil()" class="texto-botao" color="danger">Apagar</button>\n\n    	</ion-col>\n\n 	</ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\remove-modal\remove-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_receita_receita__["a" /* ReceitaProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], RemoveModalPage);
    return RemoveModalPage;
}());

//# sourceMappingURL=remove-modal.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_receita_receita__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_usuario__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritosPage = (function () {
    function FavoritosPage(navCtrl, storage, navParams, userProv, receitaProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.userProv = userProv;
        this.receitaProv = receitaProv;
        this.receitas = [];
        this.usuario = new __WEBPACK_IMPORTED_MODULE_6__models_usuario__["a" /* Usuario */];
        this.usuario = this.userProv.getUsuario();
        this.storage.get('token')
            .then(function (token) {
            _this.token = token;
            console.log(_this.token);
        });
    }
    FavoritosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritosPage');
        this.usuarioWishlist();
    };
    FavoritosPage.prototype.closeFavoritos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    FavoritosPage.prototype.usuarioWishlist = function () {
        var _this = this;
        this.receitaProv.usuarioWishlist(this.usuario.id)
            .subscribe(function (res) {
            console.log(res.receitasUsuario);
            _this.i = 0;
            while (_this.i < res.receitasUsuario.length) {
                _this.receitas[_this.i] = res.receitasUsuario[_this.i];
                _this.i = _this.i + 1;
            }
        }, function (error) {
            console.log(error);
        });
    };
    FavoritosPage.prototype.removeWishlist = function (id) {
        var _this = this;
        this.receitaProv.removeWishlist(id, this.token)
            .subscribe(function (res) {
            console.log(res);
            _this.ionViewDidLoad();
        }, function (error) {
            console.log(error);
        });
    };
    FavoritosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favoritos',template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\favoritos\favoritos.html"*/'<!--\n  Generated template for the FavoritosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Favoritos</ion-title>\n    <ion-buttons end>\n    	<button ion-button (click)="closeFavoritos()">Fechar</button>\n    </ion-buttons> \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="fundo">\n\n\n	<ion-card class="card-image">\n		<img src="../assets/imgs/torta-alema.jpg"/>\n		<div class="card-title-image">Exemplo</div>\n		<div class="card-subtitle-image">41 Listings</div>\n		<button color="danger" class="card-subtitle-image-botao" ion-button icon-only>\n  			<ion-icon name="md-trash"></ion-icon>\n		</button>\n	</ion-card>\n\n	<div *ngIf="receitas">\n		<ion-card class="card-image" *ngFor="let r of receitas">\n			<img src="../assets/imgs/torta-alema.jpg"/>\n			<div class="card-title-image">{{r.nome}}</div>\n			<div class="card-subtitle-image">{{r.nome}}</div>\n			<button color="danger" class="card-subtitle-image-botao" (click)="removeWishlist(r.id)" ion-button icon-only>\n				<ion-icon name="md-trash"></ion-icon>\n			</button>\n\n		</ion-card>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\favoritos\favoritos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_receita_receita__["a" /* ReceitaProvider */]])
    ], FavoritosPage);
    return FavoritosPage;
}());

//# sourceMappingURL=favoritos.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DificuldadePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receita_receita__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_receita_receita__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DificuldadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DificuldadePage = (function () {
    function DificuldadePage(navCtrl, navParams, receitaProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.receitaProv = receitaProv;
        this.searchQuery = '';
        this.receitas = [];
        this.dificuldadeAsc = [];
        this.dificuldadeDesc = [];
        this.show = false;
        this.asc = true; //Começo com o filtro de ascendente
    }
    DificuldadePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DificuldadePage');
        this.getReceitaDificuldadeAsc();
        this.initializeReceitas();
    };
    DificuldadePage.prototype.getReceitaDificuldadeAsc = function () {
        var _this = this;
        this.receitaProv.getReceitaDificuldadeAsc()
            .subscribe(function (res) {
            _this.i = 0;
            while (_this.i < res.receita.length) {
                _this.dificuldadeAsc[_this.i] = res.receita[_this.i];
                _this.i = _this.i + 1;
            }
            _this.initializeReceitas();
            //console.log(this.dificuldadeAsc);
        }, function (error) {
            console.log(error);
        });
    };
    DificuldadePage.prototype.getReceitaDificuldadeDesc = function () {
        var _this = this;
        this.receitaProv.getReceitaDificuldadeDesc()
            .subscribe(function (res) {
            console.log(res.length);
            _this.i = 0;
            while (_this.i < res.receita.length) {
                _this.dificuldadeDesc[_this.i] = res.receita[_this.i];
                _this.i = _this.i + 1;
            }
            _this.initializeReceitas();
            //console.log(this.dificuldadeDesc);
        }, function (error) {
            console.log(error);
        });
    };
    DificuldadePage.prototype.setReceita = function (id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade) {
        this.receitaProv.setReceita(id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__receita_receita__["a" /* ReceitaPage */]);
    };
    DificuldadePage.prototype.troca = function () {
        if (this.asc) {
            this.asc = false;
            this.getReceitaDificuldadeDesc();
        }
        else {
            this.asc = true;
            this.getReceitaDificuldadeAsc();
        }
    };
    //Searchbar
    DificuldadePage.prototype.initializeReceitas = function () {
        if (this.asc) {
            this.receitas = this.dificuldadeAsc;
        }
        else {
            this.receitas = this.dificuldadeDesc;
        }
    };
    DificuldadePage.prototype.getReceita = function (ev) {
        // Reset items back to all of the items
        this.initializeReceitas();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.receitas = this.receitas.filter(function (item) {
                return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    DificuldadePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dificuldade',template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\dificuldade\dificuldade.html"*/'<!--\n\n  Generated template for the DificuldadePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Categoria: Dificuldade</ion-title>\n\n    <ion-buttons end>\n\n    	<button ion-button (click)="troca()" icon-only><ion-icon name="logo-buffer"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-searchbar placeholder="Buscar pelo nome" (ionInput)="getReceita($event)"></ion-searchbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="fundo">\n\n\n\n	<div *ngIf="asc">\n\n		<h2 class="tituloLongo">  + Fáceis </h2>\n\n		<ion-list class="lista">\n\n			<button ion-item *ngFor="let receita of receitas" (click)="setReceita(receita.id, receita.nome, receita.descricao, receita.ingredientes, receita.tempo_preparo, receita.rendimento, receita.dificuldade)" class="texto-botao" color="light">\n\n				{{ receita.nome }}\n\n			</button>  \n\n		</ion-list>\n\n	</div>\n\n\n\n	<div *ngIf="!asc">\n\n		<h2 class="tituloLongo">  + Difícil </h2>\n\n\n\n		<ion-list class="lista">\n\n			<button ion-item *ngFor="let receita of receitas" (click)="setReceita(receita.id, receita.nome, receita.descricao, receita.ingredientes, receita.tempo_preparo, receita.rendimento, receita.dificuldade)" class="texto-botao" color="light">\n\n				{{ receita.nome }}\n\n			</button>  \n\n		</ion-list>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\dificuldade\dificuldade.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_receita_receita__["a" /* ReceitaProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_receita_receita__["a" /* ReceitaProvider */]) === "function" && _c || Object])
    ], DificuldadePage);
    return DificuldadePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=dificuldade.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RendimentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_receita_receita__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receita_receita__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RendimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RendimentoPage = (function () {
    function RendimentoPage(navCtrl, navParams, receitaProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.receitaProv = receitaProv;
        this.searchQuery = '';
        this.receitas = [];
        this.rendimentoDesc = [];
        this.rendimentoAsc = [];
        this.show = false;
        this.desc = true;
    }
    RendimentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RendimentoPage');
        this.getReceitaRendimentoDesc();
        this.initializeReceitas();
    };
    RendimentoPage.prototype.getReceitaRendimentoDesc = function () {
        var _this = this;
        this.receitaProv.getReceitaRendimentoDesc()
            .subscribe(function (res) {
            _this.i = 0;
            console.log(res.receita.length);
            while (_this.i < res.receita.length) {
                _this.rendimentoDesc[_this.i] = res.receita[_this.i];
                _this.i = _this.i + 1;
            }
            _this.initializeReceitas();
        }, function (error) {
            console.log(error);
        });
    };
    RendimentoPage.prototype.getReceitaRendimentoAsc = function () {
        var _this = this;
        this.receitaProv.getReceitaRendimentoAsc()
            .subscribe(function (res) {
            _this.i = 0;
            console.log(res);
            while (_this.i < res.receita.length) {
                _this.rendimentoAsc[_this.i] = res.receita[_this.i];
                _this.i = _this.i + 1;
            }
            _this.initializeReceitas();
        }, function (error) {
            console.log(error);
        });
    };
    RendimentoPage.prototype.setReceita = function (id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade) {
        this.receitaProv.setReceita(id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__receita_receita__["a" /* ReceitaPage */]);
    };
    RendimentoPage.prototype.troca = function () {
        if (this.desc) {
            this.desc = false;
            this.getReceitaRendimentoAsc();
        }
        else {
            this.desc = true;
            this.getReceitaRendimentoDesc();
        }
    };
    //Searchbar
    RendimentoPage.prototype.initializeReceitas = function () {
        if (this.desc) {
            this.receitas = this.rendimentoDesc;
        }
        else {
            this.receitas = this.rendimentoAsc;
        }
    };
    RendimentoPage.prototype.getReceita = function (ev) {
        // Reset items back to all of the items
        this.initializeReceitas();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.receitas = this.receitas.filter(function (item) {
                return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    RendimentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rendimento',template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\rendimento\rendimento.html"*/'<!--\n\n  Generated template for the RendimentoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Categoria: Rendimento</ion-title>\n\n    <ion-buttons end>\n\n    	<button ion-button (click)="troca()" icon-only><ion-icon name="logo-buffer"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-searchbar placeholder="Buscar pelo nome" (ionInput)="getReceita($event)"></ion-searchbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="fundo">\n\n\n\n	<div *ngIf="desc">\n\n		<h2 class="tituloLongo">  + Porções </h2>\n\n		<ion-list class="lista">\n\n			<button ion-item *ngFor="let receita of receitas" (click)="setReceita(receita.id, receita.nome, receita.descricao, receita.ingredientes, receita.tempo_preparo, receita.rendimento, receita.dificuldade)" class="texto-botao" color="light">\n\n		    	{{ receita.nome }}\n\n		  	</button>\n\n		</ion-list>\n\n	</div>\n\n\n\n	<div *ngIf="!desc">\n\n		<h2 class="tituloLongo">  - Porções </h2>\n\n		<ion-list class="lista">\n\n			<button ion-item *ngFor="let receita of receitas" (click)="setReceita(receita.id, receita.nome, receita.descricao, receita.ingredientes, receita.tempo_preparo, receita.rendimento, receita.dificuldade)" class="texto-botao" color="light">\n\n		    	{{ receita.nome }}\n\n		  	</button>\n\n		</ion-list>\n\n	</div>\n\n	\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\rendimento\rendimento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_receita_receita__["a" /* ReceitaProvider */]])
    ], RendimentoPage);
    return RendimentoPage;
}());

//# sourceMappingURL=rendimento.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_receita_receita__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__receita_receita__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TempoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TempoPage = (function () {
    function TempoPage(navCtrl, navParams, receitaProv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.receitaProv = receitaProv;
        this.searchQuery = '';
        this.receitas = [];
        this.tempoAsc = [];
        this.tempoDesc = [];
        this.show = false;
        this.asc = true;
    }
    TempoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TempoPage');
        this.getReceitaTempoAsc();
        this.initializeReceitas();
    };
    TempoPage.prototype.getReceitaTempoAsc = function () {
        var _this = this;
        this.receitaProv.getReceitaTempoAsc()
            .subscribe(function (res) {
            console.log(res.receita.length);
            _this.i = 0;
            while (_this.i < res.receita.length) {
                _this.tempoAsc[_this.i] = res.receita[_this.i];
                _this.i = _this.i + 1;
            }
            _this.initializeReceitas();
        }, function (error) {
            console.log(error);
        });
    };
    TempoPage.prototype.getReceitaTempoDesc = function () {
        var _this = this;
        this.receitaProv.getReceitaTempoDesc()
            .subscribe(function (res) {
            console.log(res.length);
            _this.i = 0;
            while (_this.i < res.receita.length) {
                _this.tempoDesc[_this.i] = res.receita[_this.i];
                _this.i = _this.i + 1;
            }
            _this.initializeReceitas();
            //console.log(this.dificuldadeDesc);
        }, function (error) {
            console.log(error);
        });
    };
    TempoPage.prototype.setReceita = function (id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade) {
        this.receitaProv.setReceita(id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__receita_receita__["a" /* ReceitaPage */]);
    };
    TempoPage.prototype.troca = function () {
        if (this.asc) {
            this.asc = false;
            this.getReceitaTempoDesc();
        }
        else {
            this.asc = true;
            this.getReceitaTempoAsc();
        }
    };
    TempoPage.prototype.initializeReceitas = function () {
        if (this.asc) {
            this.receitas = this.tempoAsc;
        }
        else {
            this.receitas = this.tempoDesc;
        }
    };
    TempoPage.prototype.getReceita = function (ev) {
        // Reset items back to all of the items
        this.initializeReceitas();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.receitas = this.receitas.filter(function (item) {
                return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    TempoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tempo',template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\tempo\tempo.html"*/'<!--\n\n  Generated template for the TempoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Categoria: Tempo</ion-title>\n\n    <ion-buttons end>\n\n    	<button ion-button (click)="troca()" icon-only><ion-icon name="logo-buffer"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <ion-searchbar placeholder="Buscar pelo nome" (ionInput)="getReceita($event)"></ion-searchbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="fundo">\n\n\n\n	<div *ngIf="asc">\n\n		<h2 class="tituloLongo">  + Rápida </h2>\n\n		<ion-list class="lista">\n\n			<button *ngFor="let receita of receitas" ion-item (click)="setReceita(receita.id, receita.nome, receita.descricao, receita.ingredientes, receita.tempo_preparo, receita.rendimento, receita.dificuldade)" color="light" class="texto-botao">\n\n		    	{{ receita.nome }}\n\n			</button>\n\n		</ion-list>\n\n	</div>\n\n\n\n	<div *ngIf="!asc">\n\n		<h2 class="tituloLongo">  + Devagar </h2>\n\n		<ion-list class="lista">\n\n			<button *ngFor="let receita of receitas" ion-item (click)="setReceita(receita.id, receita.nome, receita.descricao, receita.ingredientes, receita.tempo_preparo, receita.rendimento, receita.dificuldade)" color="light" class="texto-botao">\n\n		    	{{ receita.nome }}\n\n			</button>\n\n		</ion-list>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\tempo\tempo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_receita_receita__["a" /* ReceitaProvider */]])
    ], TempoPage);
    return TempoPage;
}());

//# sourceMappingURL=tempo.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceitaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_receita__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ReceitaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReceitaProvider = (function () {
    function ReceitaProvider(http) {
        this.http = http;
        this.receitaApiUrl = 'http://localhost:8000/api/';
        this.receita = new __WEBPACK_IMPORTED_MODULE_3__models_receita__["a" /* Receita */];
        console.log('Hello ReceitaProvider Provider');
    }
    //Usuário mandar receita
    ReceitaProvider.prototype.insereReceita = function (id, token, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade) {
        return this.http.post(this.receitaApiUrl + 'receita/insere/' + id + '?token=' + token, { nome: nome, descricao: descricao, ingredientes: ingredientes, tempo_preparo: tempo_preparo, rendimento: rendimento, dificuldade: dificuldade })
            .map(function (res) { return res; });
    };
    // A receita do usuário aparecer em seu perfil
    ReceitaProvider.prototype.getReceitaPerfil = function (token) {
        return this.http.get(this.receitaApiUrl + 'receita/?token=' + token)
            .map(function (res) { return res; });
    };
    // O usuário deletar uma receita que inseriu
    //id -> id da receita
    ReceitaProvider.prototype.deletaReceitaPerfil = function (id, token) {
        return this.http.delete(this.receitaApiUrl + 'receita/deleta/' + id + '?token=' + token)
            .map(function (res) { return res; });
    };
    // Usuário atualizar uma receita que inseriu
    ReceitaProvider.prototype.atualizaReceita = function (id, token, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade) {
        return this.http.put(this.receitaApiUrl + 'receita/atualiza/' + id + '?token=' + token, { nome: nome, descricao: descricao, ingredientes: ingredientes, tempo_preparo: tempo_preparo, rendimento: rendimento, dificuldade: dificuldade })
            .map(function (res) { return res; });
    };
    //Pegar lista de receita pelas mais fáceis em primeiro
    ReceitaProvider.prototype.getReceitaDificuldadeAsc = function () {
        return this.http.get(this.receitaApiUrl + 'receita/dificuldadeAsc')
            .map(function (res) { return res; });
    };
    //Pegar lista de receita pelas mais difíceis em primeiro
    ReceitaProvider.prototype.getReceitaDificuldadeDesc = function () {
        return this.http.get(this.receitaApiUrl + 'receita/dificuldadeDesc')
            .map(function (res) { return res; });
    };
    //Pegar lista de receita pelas que mais rendem
    ReceitaProvider.prototype.getReceitaRendimentoDesc = function () {
        return this.http.get(this.receitaApiUrl + 'receita/rendimentoDesc')
            .map(function (res) { return res; });
    };
    //Pegar lista de receita pelas que menos rendem
    ReceitaProvider.prototype.getReceitaRendimentoAsc = function () {
        return this.http.get(this.receitaApiUrl + 'receita/rendimentoAsc')
            .map(function (res) { return res; });
    };
    //Pegar lista de receita pelas mais rápidas
    ReceitaProvider.prototype.getReceitaTempoAsc = function () {
        return this.http.get(this.receitaApiUrl + 'receita/tempoAsc')
            .map(function (res) { return res; });
    };
    //Pegar lista de receita pelas mais demoradas
    ReceitaProvider.prototype.getReceitaTempoDesc = function () {
        return this.http.get(this.receitaApiUrl + 'receita/tempoDesc')
            .map(function (res) { return res; });
    };
    //Pegar as últimas inseridas
    ReceitaProvider.prototype.getReceitaRecentes = function () {
        return this.http.get(this.receitaApiUrl + 'recentes')
            .map(function (res) { return res; });
    };
    //Identificar com qual receita estou trabalhando
    ReceitaProvider.prototype.setReceita = function (id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade) {
        this.receita.id = id;
        this.receita.nome = nome;
        this.receita.descricao = descricao;
        this.receita.ingredientes = ingredientes;
        this.receita.tempo_preparo = tempo_preparo;
        this.receita.rendimento = rendimento;
        this.receita.dificuldade = dificuldade;
    };
    //Retornar a receita com qual estou trabalhando
    ReceitaProvider.prototype.getReceita = function () {
        return this.receita;
    };
    //Wishlist
    ReceitaProvider.prototype.insereWishlist = function (id, token) {
        return this.http.get(this.receitaApiUrl + 'wishlist/insere/' + id + '?token=' + token)
            .map(function (res) { return res; });
    };
    ReceitaProvider.prototype.usuarioWishlist = function (id) {
        return this.http.get(this.receitaApiUrl + 'wishlist/' + id)
            .map(function (res) { return res; });
    };
    ReceitaProvider.prototype.removeWishlist = function (id, token) {
        return this.http.delete(this.receitaApiUrl + 'wishlist/deleta/' + id + '?token=' + token)
            .map(function (res) { return res; });
    };
    ReceitaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ReceitaProvider);
    return ReceitaProvider;
}());

//# sourceMappingURL=receita.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/busca-ingredientes/busca-ingredientes.module": [
		300,
		9
	],
	"../pages/cadastro-modal/cadastro-modal.module": [
		301,
		8
	],
	"../pages/dificuldade/dificuldade.module": [
		303,
		7
	],
	"../pages/editar-modal/editar-modal.module": [
		302,
		6
	],
	"../pages/favoritos/favoritos.module": [
		304,
		5
	],
	"../pages/login-modal/login-modal.module": [
		305,
		4
	],
	"../pages/receita/receita.module": [
		306,
		3
	],
	"../pages/remove-modal/remove-modal.module": [
		307,
		2
	],
	"../pages/rendimento/rendimento.module": [
		308,
		1
	],
	"../pages/tempo/tempo.module": [
		309,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listaReceita_listaReceita__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addReceita_addReceita__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__listaReceita_listaReceita__["a" /* listaReceitaPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__addReceita_addReceita__["a" /* addReceitaPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n\n  <ion-tab [root]="tab1Root" tabTitle="Página Inicial" tabIcon="md-home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Receitas" tabIcon="ios-list-box-outline"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Add Receita" tabIcon="md-add"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Perfil" tabIcon="md-contact"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receita_receita__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_receita_receita__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, receitaProv) {
        this.navCtrl = navCtrl;
        this.receitaProv = receitaProv;
        this.recentes = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.getReceitaRecentes();
    };
    HomePage.prototype.goReceita = function (id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade) {
        this.receitaProv.setReceita(id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__receita_receita__["a" /* ReceitaPage */]);
    };
    HomePage.prototype.getReceitaRecentes = function () {
        var _this = this;
        this.i = 0;
        console.log('entrei');
        this.receitaProv.getReceitaRecentes()
            .subscribe(function (res) {
            console.log(res.receita.length);
            while (_this.i < res.receita.length) {
                _this.recentes[_this.i] = res.receita[_this.i];
                _this.i = _this.i + 1;
            }
            console.log(_this.recentes);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Página Inicial</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="fundo">\n\n  \n\n  <h1 class="logo"><span style="color:#BD322B">i</span><span style="color:#1B2B32">Cook</span> </h1>\n\n\n\n  <h5 class="tituloLongo"> As mais recentes </h5>\n\n\n\n  <div *ngIf="recentes">\n\n    <ion-card class="card-image" *ngFor="let r of recentes" (click)="goReceita(r.id, r.nome, r.descricao, r.ingredientes, r.tempo_preparo, r.rendimento, r.dificuldade)">\n\n      <img src="../assets/imgs/torta-alema.jpg"/>\n\n      <div class="card-title-image">{{r.nome}}</div>\n\n      <div class="card-subtitle-image">{{r.nome}}</div>\n\n    </ion-card>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_receita_receita__["a" /* ReceitaProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listaReceitaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dificuldade_dificuldade__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rendimento_rendimento__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tempo_tempo__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__busca_ingredientes_busca_ingredientes__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var listaReceitaPage = (function () {
    function listaReceitaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    listaReceitaPage.prototype.openListaDificuldade = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dificuldade_dificuldade__["a" /* DificuldadePage */]);
    };
    listaReceitaPage.prototype.openListaRendimento = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__rendimento_rendimento__["a" /* RendimentoPage */]);
    };
    listaReceitaPage.prototype.openListaTempo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tempo_tempo__["a" /* TempoPage */]);
    };
    listaReceitaPage.prototype.openBuscaIngredientes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__busca_ingredientes_busca_ingredientes__["a" /* BuscaIngredientesPage */]);
    };
    listaReceitaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listaReceita',template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\listaReceita\listaReceita.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>\n\n    Lista de Receitas\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="fundo">\n\n	\n\n	<h5 class="tituloLongo"> Veja as receitas Tops nas Categorias: </h5>\n\n\n\n	<div class="dificuldade">\n\n		<button ion-button (click)="openListaDificuldade()" block icon-right color="danger" class="texto-botao">Dificuldade<ion-icon name="md-hammer"></ion-icon></button>\n\n	</div>\n\n\n\n	<div class="rendimento">\n\n		<button ion-button (click)="openListaRendimento()" block icon-right color="secondary" class="texto-botao">Rendimento<ion-icon name="md-beaker"></ion-icon></button>\n\n	</div>\n\n\n\n	<div class="tempo">\n\n		<button ion-button (click)="openListaTempo()" block icon-right color="primary" class="texto-botao">Tempo<ion-icon name="md-alarm"></ion-icon></button>\n\n	</div>\n\n\n\n	<div class="busca">\n\n		<button ion-button (click)="openBuscaIngredientes()" block icon-right class="texto-botao" style="background-color:#909090">Busque por ingredientes<ion-icon name="md-list"></ion-icon></button>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\listaReceita\listaReceita.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], listaReceitaPage);
    return listaReceitaPage;
}());

//# sourceMappingURL=listaReceita.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceitaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_receita_receita__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_receita__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_usuario__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_modal_login_modal__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ReceitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReceitaPage = (function () {
    function ReceitaPage(navCtrl, modalCtrl, navParams, storage, userProv, receitaProv) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.userProv = userProv;
        this.receitaProv = receitaProv;
        this.receita = new __WEBPACK_IMPORTED_MODULE_4__models_receita__["a" /* Receita */];
        this.usuario = new __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* Usuario */];
        this.usuario = this.userProv.getUsuario();
        this.receita = this.receitaProv.getReceita();
        console.log(this.receita);
        this.show = false;
    }
    //Função para auxiliar a inserção na wishlist por meio de um evento click no botão 'Favorito'
    ReceitaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReceitaPage');
    };
    ReceitaPage.prototype.getToken = function () {
        var _this = this;
        this.storage.get('token')
            .then(function (token) {
            _this.token = token;
            console.log(_this.token);
        });
        if (this.usuario.id) {
            console.log(this.token);
            this.insereWishlist();
        }
        if (!this.usuario.id) {
            console.log(this.token);
            if (!this.show) {
                this.show = true;
            }
            else {
                this.show = false;
            }
        }
    };
    //Funcionalidade do usuário fvoritar suasreceitas queridas
    ReceitaPage.prototype.insereWishlist = function () {
        console.log(this.receita.id);
        console.log(this.token);
        this.receitaProv.insereWishlist(this.receita.id, this.token)
            .subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.log(error);
        });
    };
    ReceitaPage.prototype.presentLoginModal = function () {
        this.show = false;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__login_modal_login_modal__["a" /* LoginModalPage */]);
        modal.present();
    };
    ReceitaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-receita',template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\receita\receita.html"*/'<!--\n\n  Generated template for the ReceitaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>{{receita.nome}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="fundo">\n\n	<ion-card>\n\n		<img src="assets/imgs/torta-alema.jpg"/>\n\n		<ion-card-content>\n\n		<ion-card-title class="titulo-card">{{ receita.nome }}</ion-card-title>\n\n			<span class="topicos"> Descricao </span> <p> {{receita.descricao}} </p>\n\n			<span class="topicos"> Ingredientes </span> <p>{{receita.ingredientes}} </p>\n\n			<span class="topicos"> Tempo de Preparo </span> <p> {{receita.tempo_preparo}} </p>\n\n			<span class="topicos"> Porção </span> <p> {{receita.rendimento}} </p>\n\n			<span class="topicos"> Dificuldade </span> <p> {{receita.dificuldade}} </p>\n\n		</ion-card-content>\n\n\n\n		<ion-row class="fundo">\n\n			<button ion-button block icon-right (click)="getToken()" color="secondary">Favoritar<ion-icon name="star"></ion-icon></button>\n\n			<div *ngIf="show">\n\n				<span class="titulo">Opa!</span>\n\n				<p style="text-align:center">Para fazer esta ação você precisa ser cadastrado e estar logado</p>\n\n\n\n				<button ion-button (click)="presentLoginModal()" block icon-right color="danger" class="texto-botao">Faça seu login ou cadastro!</button>\n\n			</div>\n\n		</ion-row>\n\n\n\n	</ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\receita\receita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_receita_receita__["a" /* ReceitaProvider */]])
    ], ReceitaPage);
    return ReceitaPage;
}());

//# sourceMappingURL=receita.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_listaReceita_listaReceita__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dificuldade_dificuldade__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_rendimento_rendimento__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tempo_tempo__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_busca_ingredientes_busca_ingredientes__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_receita_receita__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_addReceita_addReceita__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_modal_login_modal__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_editar_modal_editar_modal__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cadastro_modal_cadastro_modal__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_remove_modal_remove_modal__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_favoritos_favoritos__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_usuario_usuario__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_receita_receita__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_storage__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_listaReceita_listaReceita__["a" /* listaReceitaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dificuldade_dificuldade__["a" /* DificuldadePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_rendimento_rendimento__["a" /* RendimentoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tempo_tempo__["a" /* TempoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_busca_ingredientes_busca_ingredientes__["a" /* BuscaIngredientesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_receita_receita__["a" /* ReceitaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_addReceita_addReceita__["a" /* addReceitaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_modal_login_modal__["a" /* LoginModalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_editar_modal_editar_modal__["a" /* EditarModalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cadastro_modal_cadastro_modal__["a" /* CadastroModalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_remove_modal_remove_modal__["a" /* RemoveModalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_favoritos_favoritos__["a" /* FavoritosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/busca-ingredientes/busca-ingredientes.module#BuscaIngredientesPageModule', name: 'BuscaIngredientesPage', segment: 'busca-ingredientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-modal/cadastro-modal.module#CadastroModalPageModule', name: 'CadastroModalPage', segment: 'cadastro-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editar-modal/editar-modal.module#EditarModalPageModule', name: 'EditarModalPage', segment: 'editar-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dificuldade/dificuldade.module#DificuldadePageModule', name: 'DificuldadePage', segment: 'dificuldade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favoritos/favoritos.module#FavoritosPageModule', name: 'FavoritosPage', segment: 'favoritos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-modal/login-modal.module#LoginModalPageModule', name: 'LoginModalPage', segment: 'login-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receita/receita.module#ReceitaPageModule', name: 'ReceitaPage', segment: 'receita', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/remove-modal/remove-modal.module#RemoveModalPageModule', name: 'RemoveModalPage', segment: 'remove-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rendimento/rendimento.module#RendimentoPageModule', name: 'RendimentoPage', segment: 'rendimento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tempo/tempo.module#TempoPageModule', name: 'TempoPage', segment: 'tempo', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_listaReceita_listaReceita__["a" /* listaReceitaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dificuldade_dificuldade__["a" /* DificuldadePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_rendimento_rendimento__["a" /* RendimentoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tempo_tempo__["a" /* TempoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_busca_ingredientes_busca_ingredientes__["a" /* BuscaIngredientesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_receita_receita__["a" /* ReceitaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_addReceita_addReceita__["a" /* addReceitaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_login_modal_login_modal__["a" /* LoginModalPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_editar_modal_editar_modal__["a" /* EditarModalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cadastro_modal_cadastro_modal__["a" /* CadastroModalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_remove_modal_remove_modal__["a" /* RemoveModalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_favoritos_favoritos__["a" /* FavoritosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_receita_receita__["a" /* ReceitaProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_usuario__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Headers, RequestOptions } from '@angular/http';



/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//Provider para tomar conta das ações de logar e cadastro de usuário
var UsuarioProvider = (function () {
    //private headers = new Headers({'Content-Type': 'application/json'});
    //private options = new RequestOptions({headers: this.headers});
    function UsuarioProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_4__models_usuario__["a" /* Usuario */];
        this.usuarioApiUrl = 'http://localhost:8000/api/'; //url da controller correspondente; que está na routes/api
        console.log('Hello UsuarioProvider Provider');
    }
    //Usuário poder logar
    UsuarioProvider.prototype.login = function (email, password) {
        return this.http.post(this.usuarioApiUrl + 'signin', { email: email, password: password }) //signin => função es está descrita na minha controller (explicita na routes/api)
            .map(function (res) { return res; });
    };
    //Cadastrar novo usuário
    UsuarioProvider.prototype.cadastro = function (name, email, password) {
        return this.http.post(this.usuarioApiUrl + 'signup', { name: name, email: email, password: password })
            .map(function (res) { return res; });
    };
    //Identificar qual usuário está logado no momento
    UsuarioProvider.prototype.setUsuario = function (currentUserId, currentUserNome, currentUserEmail) {
        this.usuario.id = currentUserId;
        this.usuario.nome = currentUserNome;
        this.usuario.email = currentUserEmail;
    };
    //Retornar qual usuário está logado no momento
    UsuarioProvider.prototype.getUsuario = function () {
        console.log(this.usuario);
        return this.usuario;
    };
    //Identificar o token do usuário logado no momento
    UsuarioProvider.prototype.setToken = function (tokenRes) {
        this.storage.set('token', tokenRes);
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_modal_cadastro_modal__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 //Provider para fazer o login

/**
 * Generated class for the LoginModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginModalPage = (function () {
    function LoginModalPage(navCtrl, navParams, modalCtrl, view, userProv, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.view = view;
        this.userProv = userProv;
        this.storage = storage;
        this.avisoErro = false;
    }
    LoginModalPage.prototype.presentCadastroModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__cadastro_modal_cadastro_modal__["a" /* CadastroModalPage */]);
        modal.present();
    };
    LoginModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginModalPage');
    };
    LoginModalPage.prototype.login = function (email, password) {
        var _this = this;
        this.userProv.login(email, password) //chamo a função login que criei na minha provider
            .subscribe(function (res) {
            _this.userProv.setToken(res.token);
            console.log(_this.token);
            _this.userProv.setUsuario(res.currentUser.id, res.currentUser.name, res.currentUser.email);
            _this.view.dismiss();
        }, function (error) {
            _this.avisoErro = true;
            console.log(error);
        });
    };
    LoginModalPage.prototype.closeLoginModal = function () {
        this.view.dismiss();
        //console.log(this.userProv.getToken()); //Teste
    };
    LoginModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-modal',template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\login-modal\login-modal.html"*/'<!--\n\n  Generated template for the LoginModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>Acesse sua Conta</ion-title>\n\n    <ion-buttons end>\n\n    	<button ion-button (click)="closeLoginModal()">Fechar</button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="fundo">\n\n  \n\n  <div class="componentesModal">\n\n    <h5 class="titulo"> Acesse sua Conta: </h5>\n\n  	<form>\n\n      <ion-item>\n\n	        <ion-label>E-mail</ion-label>\n\n	        <ion-input #email type="email" name="email"></ion-input>\n\n      	</ion-item>\n\n      	<ion-item>\n\n	        <ion-label>Senha</ion-label>\n\n	        <ion-input #password type="password" name="password"></ion-input>\n\n      	</ion-item>\n\n      <button ion-button (click)="login(email.value, password.value)" full type="submit" color="danger" class="submit" block>Entrar</button> <!-- Chamo a função do meu login-modal.ts -->\n\n    </form>\n\n    <button ion-button (click)="presentCadastroModal()" block outline class="texto-botao">Não tem conta? Cadastre-se!</button>\n\n    \n\n    <div *ngIf="avisoErro">\n\n      <p class="erro-texto"> E-mail ou senha invalidos </p>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\login-modal\login-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], LoginModalPage);
    return LoginModalPage;
}());

//# sourceMappingURL=login-modal.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Receita; });
var Receita = (function () {
    function Receita() {
    }
    return Receita;
}());

//# sourceMappingURL=receita.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__remove_modal_remove_modal__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_modal_login_modal__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editar_modal_editar_modal__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__favoritos_favoritos__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addReceita_addReceita__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_receita_receita__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_usuario_usuario__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_usuario__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProfilePage = (function () {
    function ProfilePage(navCtrl, modalCtrl, receitaProv, userProv, storage) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.receitaProv = receitaProv;
        this.userProv = userProv;
        this.storage = storage;
        this.receitas = []; //Array de receitas do usuário
        this.usuario = new __WEBPACK_IMPORTED_MODULE_10__models_usuario__["a" /* Usuario */];
        this.show = false;
        this.usuario = this.userProv.getUsuario();
        console.log(this.usuario);
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Perfil');
    };
    ProfilePage.prototype.presentRemoveModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__remove_modal_remove_modal__["a" /* RemoveModalPage */]);
        modal.present();
        this.getReceitaPerfil();
    };
    ProfilePage.prototype.goEditar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__editar_modal_editar_modal__["a" /* EditarModalPage */]);
    };
    ProfilePage.prototype.goAddReceita = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__addReceita_addReceita__["a" /* addReceitaPage */]);
    };
    ProfilePage.prototype.presentLoginModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__login_modal_login_modal__["a" /* LoginModalPage */]);
        modal.present();
    };
    ProfilePage.prototype.getToken = function () {
        var _this = this;
        this.storage.get('token')
            .then(function (token) {
            _this.token = token;
            console.log(_this.token);
            _this.getReceitaPerfil();
        });
    };
    ProfilePage.prototype.getReceitaPerfil = function () {
        var _this = this;
        if (!this.show) {
            this.receitaProv.getReceitaPerfil(this.token)
                .subscribe(function (res) {
                if (!res.receita.length) {
                    _this.show = true;
                }
                else {
                    _this.i = 0;
                    while (_this.i < res.receita.length) {
                        _this.receitas[_this.i] = res.receita[_this.i];
                        _this.i = _this.i + 1;
                    }
                    _this.show = true;
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.receitas = [];
            this.show = false;
        }
    };
    ProfilePage.prototype.setReceitaDeletar = function (id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade) {
        this.receitaProv.setReceita(id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade);
        this.presentRemoveModal();
    };
    ProfilePage.prototype.setReceitaEditar = function (id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade) {
        this.receitaProv.setReceita(id, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade);
        this.goEditar();
    };
    ProfilePage.prototype.goFavoritos = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__favoritos_favoritos__["a" /* FavoritosPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\profile\profile.html"*/'<ion-header color="secondary">\n\n 	<ion-navbar color="secondary">\n\n		<ion-title>Meu Perfil</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="fundo">\n\n	\n\n	<div *ngIf="usuario.id">\n\n		<ion-list>\n\n	  		<ion-item>\n\n			    <h2 class="nome-perfil">{{ usuario.nome }}</h2>\n\n			    <p>Panqueca</p>\n\n	  		</ion-item>\n\n		</ion-list>\n\n\n\n\n\n		<div>\n\n\n\n			<button ion-button (click)="getToken()" block outline class="titulo">Minhas Receitas:</button>\n\n\n\n		  	<div *ngIf="receitas.length">\n\n\n\n				<ion-card class="card" *ngFor="let r of receitas">\n\n			  \n\n			  		<img src="assets/imgs/torta-alema.jpg"/>\n\n			  		<ion-card-content>\n\n			    		<ion-card-title>{{r.nome}}</ion-card-title>\n\n\n\n						<ion-row>\n\n							<ion-col width-50 style="text-align: right">\n\n			       				<button class="tam-botao" ion-button icon-right (click)="setReceitaEditar(r.id, r.nome, r.descricao, r.ingredientes, r.tempo_preparo, r.rendimento, r.dificuldade)">Editar<ion-icon name="md-create"></ion-icon></button>\n\n			     			</ion-col>  \n\n\n\n			     			<ion-col width-50 style="text-align: left">\n\n			      				<button class="tam-botao" ion-button icon-right color="danger" (click)="setReceitaDeletar(r.id, r.nome, r.descricao, r.ingredientes, r.tempo_preparo, r.rendimento, r.dificuldade)">Apagar<ion-icon name="md-trash"></ion-icon></button>\n\n			    			</ion-col>\n\n			 			</ion-row>\n\n\n\n			  		</ion-card-content>\n\n				</ion-card>\n\n			</div>\n\n\n\n			<div *ngIf="show">\n\n	   			<button ion-button (click)="goAddReceita()" block class="texto-botao" color="primary">\n\n	    			Adicione uma Receita!\n\n	    		</button>\n\n			</div>\n\n\n\n		</div>\n\n\n\n\n\n\n\n		<button ion-button block icon-right color="secondary" (click)="goFavoritos()" class="texto-botao">Lista de favoritos<ion-icon name="md-star"></ion-icon></button>\n\n\n\n\n\n		<button ion-button block outline icon-right color="danger" class="texto-botao">Sair<ion-icon name="md-exit"></ion-icon></button>\n\n	</div>\n\n\n\n	<div *ngIf="!usuario.id" class="componentesModal"> <!-- Não é cadastrado -->\n\n		<div class="componentesLoginModal">\n\n			<h5 class="opa">Opa!</h5>\n\n			<p style="text-align:center">Para fazer esta ação você precisa ser cadastrado e estar logado</p>\n\n		</div>\n\n\n\n		<button ion-button (click)="presentLoginModal()" block icon-right color="danger" class="texto-botao">Faça seu login ou cadastro!</button>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_receita_receita__["a" /* ReceitaProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addReceitaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_receita_receita__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_modal_login_modal__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__receita_receita__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_usuario__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var addReceitaPage = (function () {
    function addReceitaPage(navCtrl, modalCtrl, storage, receitaProv, userProv) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.receitaProv = receitaProv;
        this.userProv = userProv;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_7__models_usuario__["a" /* Usuario */];
        this.avisoErro = false;
        this.usuario = this.userProv.getUsuario();
        console.log(this.usuario);
        this.storage.get('token')
            .then(function (token) {
            _this.token = token;
            console.log(_this.token);
        });
    }
    addReceitaPage.prototype.presentLoginModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__login_modal_login_modal__["a" /* LoginModalPage */]);
        modal.present();
    };
    addReceitaPage.prototype.insereReceita = function (nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade) {
        var _this = this;
        this.receitaProv.insereReceita(this.usuario.id, this.token, nome, descricao, ingredientes, tempo_preparo, rendimento, dificuldade)
            .subscribe(function (res) {
            console.log(res.receita.id);
            _this.receitaProv.setReceita(res.receita.id, res.receita.nome, res.receita.descricao, res.receita.ingredientes, res.receita.tempo_preparo, res.receita.rendimento, res.receita.dificuldade);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__receita_receita__["a" /* ReceitaPage */]);
        }, function (error) {
            _this.avisoErro = true;
            console.log(error);
        });
    };
    addReceitaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addReceita',template:/*ion-inline-start:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\addReceita\addReceita.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <ion-title>\n\n    Adicione uma Receita\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="fundo">\n\n  <div *ngIf="usuario.id">\n\n    <h5 class="titulo"> \n\n      Envie sua Receita \n\n    </h5>\n\n\n\n  	<form class="space">\n\n  		<ion-item>\n\n  	    <ion-label>Título</ion-label>\n\n  	     <ion-input #nome type="text"name="name" placeholder="Nome da Receita"></ion-input>\n\n      </ion-item>\n\n\n\n      	<ion-item>\n\n  	        <ion-label>Descrição</ion-label>\n\n  	        <ion-textarea #descricao type="textearea" name="descricao"></ion-textarea>\n\n        	</ion-item>\n\n\n\n        	<ion-item>\n\n  	        <ion-label>Ingredientes</ion-label>\n\n  	        <ion-textarea #ingredientes type="textarea" name="ingredientes"></ion-textarea>\n\n        	</ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label>Tempo em min</ion-label>\n\n            <ion-input #tempoPreparo type="text" name="tempo" plceholder="Somente número"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label>Rendimento</ion-label>\n\n            <ion-input #rendimento type="text" name="rendimento" placeholder="Somente número"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label>Dificuldade</ion-label>\n\n            <ion-input #dificuldade type="text" name="dificuldade" placeholder="1 (fácil) - 10 (difícil)"></ion-input>\n\n          </ion-item>\n\n\n\n        	<button ion-button class="botao-anexar" color="primary" float-center>Anexar imagem</button>\n\n\n\n        	<button ion-button (click)="insereReceita(nome.value, descricao.value, ingredientes.value, tempoPreparo.value, rendimento.value, dificuldade.value)" block class="texto-botao" color="danger">Enviar Receita!\n\n          </button>\n\n\n\n    </form>\n\n  </div>\n\n\n\n  <div *ngIf="!usuario.id" class="componentesModal"> <!-- Não é cadastrado -->\n\n    <div class="componentesLoginModal">\n\n      <h5 class="opa">Opa!</h5>\n\n      <p style="text-align:center">Para fazer esta ação você precisa ser cadastrado e estar logado</p>\n\n    </div>\n\n\n\n    <button ion-button (click)="presentLoginModal()" block icon-right color="danger" class="texto-botao">Faça seu login ou cadastro!</button>\n\n  </div>\n\n\n\n  <div *ngIf="avisoErro">\n\n    <p class="erro-texto"> Essa receita já existe, coloque outro nome </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\galen\Desktop\Projetos\iCook\projeto-Ionic\src\pages\addReceita\addReceita.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_receita_receita__["a" /* ReceitaProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], addReceitaPage);
    return addReceitaPage;
}());

//# sourceMappingURL=addReceita.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map