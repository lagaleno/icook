import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { listaReceitaPage } from '../listaReceita/listaReceita';
import { addReceitaPage } from '../addReceita/addReceita';
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


	tab1Root = HomePage;
	tab2Root = listaReceitaPage;
	tab3Root = addReceitaPage;
	tab4Root = ProfilePage;

	constructor() {

	}

}
