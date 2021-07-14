import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent implements OnInit {

  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required),
    observacion: new FormControl('', Validators.required)
  })

  aviso:any;
  supercaja:any;

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    this.aviso = document.getElementById('aviso');
    this.supercaja = document.getElementById('supercaja');

    if(this.formulario.get('nombre')?.value == false || this.formulario.get('pais')?.value == false || this.formulario.get('observacion')?.value == false){
      alert('Complete todos los campos requeridos');     
    }else{
      this.supercaja.style.display = 'none';
      this.aviso.style.display = 'block';
    }

  }

}
