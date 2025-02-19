import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CestaService } from '../../services/cesta.servicio/cesta.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent  implements AfterViewInit {
  @ViewChild('paypalContainer', { static: false }) paypalElement!: ElementRef;


  ngAfterViewInit() {
    this.loadPayPalScript().then(() => {
      (window as any).paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: { value: '100.00' }
            }]
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            alert('Pago realizado con éxito por ' + details.payer.name.given_name);
          });
        }
      }).render(this.paypalElement.nativeElement);
    });
  }

  loadPayPalScript(): Promise<void> {
    return new Promise((resolve) => {
      if ((window as any).paypal) {
        resolve();
      } else {
        const script = document.createElement('script');
        script.src = 'https://www.paypal.com/sdk/js?client-id=AaBmDYEAItwZbgCgBuzyU3N7_KZqrFaODkoC2vP23GKu1mVTVB1_skn88YpIER8QJLO3e1ijvqNJAwsx&currency=USD';
        script.onload = () => resolve();
        document.body.appendChild(script);
      }
    });
  }

  cesta: any[] = [];

  constructor(private cestaService: CestaService) {}

  ngOnInit() {
    this.cesta = this.cestaService.obtenerCesta();
  }
}