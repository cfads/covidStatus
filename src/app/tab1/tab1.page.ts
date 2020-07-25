import { Component } from '@angular/core';
import { CovidService } from '../covid.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [CovidService]
})
export class Tab1Page {

  constructor(public covidService: CovidService, public loadingController: LoadingController) { }

  public lista_estados = new Array<any>();

  carregaPagina() {
    this.covidService.getEstados().subscribe(
      data => {
        const response = (data as any);
        this.lista_estados = this.lista_estados.concat(response.data);
      },
      error => {
        console.log("error");
      }
    )
  }

  ionViewDidEnter() {
    this.efeitoLoading();
    this.carregaPagina();
  }

  async efeitoLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando Informações',
      duration: 1500
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  sair() {
    navigator['app'].exitApp();
  }

}
