import Button from "../js/button.js";

var score;

// Clase Retry, donde se crean los botones, el logo y el fondo del menú derrota
export class Retry extends Phaser.Scene {
  constructor() {
    super("Retry");
  }

  init(data) {
    // recupera el valor SCORE enviado como dato al inicio de la escena
    score = data.score;
  }

  create() {
    // Fondo del menú derrota
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY,
        "fondovictoria"
      )
      .setScale(1.1);
    // Vaca triste
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY / 1.5,
      "sad_cow"
      
    );
    // Texto que muestra el puntaje maximo alcanzado
    this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY/0.7,
        `Puntaje final: ${score}`,{
          fontSize: "54px",
          fill: "white",
        })
      .setOrigin(0.5);

    // Boton para volver a jugar
    const boton = new Button(
      this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY / 1.6,
      "Retry",
      this,
      () => {
        // Instrucción para pasar a la escena Play
        this.scene.start("Play");
      }
    );
  }
}