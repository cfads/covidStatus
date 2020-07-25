import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/usuario/autenticacao.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public autenticacaoService: AutenticacaoService,
    public router:Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  public email:string = "";
  public senha:string = "";
  public mensagem:string = "";

  loginUsuario(){
    this.autenticacaoService.loginNoFireBase(this.email,this.senha)
    .then((res) => {
      this.router.navigate(['app/tabs/tab1']);
    }).catch((error) => {
      this.mensagem = "Email e/ou Senha incorreto(s)";
      this.exibeMensagem();
    })
  }

  async exibeMensagem(){
    const toast= await this.toastController.create({
      message: this.mensagem,
      duration: 2000
    });
    toast.present();
  }


}
