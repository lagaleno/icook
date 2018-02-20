import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { HomePage } from '../pages/home/home';
import { listaReceitaPage } from '../pages/listaReceita/listaReceita';
import { DificuldadePage } from '../pages/dificuldade/dificuldade';
import { RendimentoPage } from '../pages/rendimento/rendimento';
import { TempoPage } from '../pages/tempo/tempo';
import { BuscaIngredientesPage } from '../pages/busca-ingredientes/busca-ingredientes';
import { ReceitaPage } from '../pages/receita/receita';
import { addReceitaPage } from '../pages/addReceita/addReceita';
import { LoginModalPage } from '../pages/login-modal/login-modal';
import { ProfilePage } from '../pages/profile/profile';
import { EditarModalPage } from '../pages/editar-modal/editar-modal';
import { CadastroModalPage } from '../pages/cadastro-modal/cadastro-modal';
import { RemoveModalPage } from '../pages/remove-modal/remove-modal';
import { FavoritosPage } from '../pages/favoritos/favoritos';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { ReceitaProvider } from '../providers/receita/receita';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    listaReceitaPage,
    DificuldadePage,
    RendimentoPage,
    TempoPage,
    BuscaIngredientesPage,
    ReceitaPage,
    addReceitaPage,
    LoginModalPage,
    ProfilePage,
    EditarModalPage,
    CadastroModalPage,
    RemoveModalPage,
    FavoritosPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    listaReceitaPage,
    DificuldadePage,
    RendimentoPage,
    TempoPage,
    BuscaIngredientesPage,
    ReceitaPage,
    addReceitaPage,
    LoginModalPage,
    ProfilePage,
    EditarModalPage,
    CadastroModalPage,
    RemoveModalPage,
    FavoritosPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    ReceitaProvider,
  ]
})
export class AppModule {}
