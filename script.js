* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;

  background: #02030a;

  font-family:
    Arial,
    Helvetica,
    sans-serif;
}

body {
  position: relative;
}

#canvas {
  position: fixed;

  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  display: block;

  z-index: 1;
}

#video {
  position: fixed;

  width: 1px;
  height: 1px;

  opacity: 0;

  pointer-events: none;

  z-index: -1;
}

#interface {
  position: fixed;

  left: 25px;
  top: 25px;

  z-index: 10;

  color: white;

  pointer-events: none;

  padding: 16px 20px;

  border-radius: 14px;

  background:
    rgba(2, 5, 18, 0.72);

  border:
    1px solid
    rgba(0, 255, 255, 0.22);

  backdrop-filter:
    blur(10px);

  box-shadow:
    0 0 30px
    rgba(0, 255, 255, 0.08);
}

.brand {
  color: #00ffff;

  font-size: 13px;

  font-weight: bold;

  letter-spacing: 4px;

  margin-bottom: 12px;

  text-shadow:
    0 0 10px #00ffff,
    0 0 25px #00ffff;
}

#gesture {
  font-size: 25px;

  font-weight: bold;

  letter-spacing: 1px;

  color: white;

  text-shadow:
    0 0 10px white,
    0 0 25px #00ffff;
}

#shape {
  margin-top: 7px;

  font-size: 14px;

  letter-spacing: 2px;

  color: #ff38df;

  text-shadow:
    0 0 10px #ff38df;
}

#instruction {
  margin-top: 14px;

  font-size: 10px;

  line-height: 1.8;

  color: #8c96b8;

  letter-spacing: 0.5px;
}

#startButton {
  position: fixed;

  left: 50%;
  top: 50%;

  transform:
    translate(-50%, -50%);

  z-index: 20;

  padding:
    16px 30px;

  border: none;

  border-radius: 50px;

  color: white;

  font-size: 14px;

  font-weight: bold;

  letter-spacing: 2px;

  cursor: pointer;

  background:
    linear-gradient(
      135deg,
      #00d9ff,
      #7b32ff,
      #ff2bc2
    );

  box-shadow:
    0 0 20px
      rgba(0, 230, 255, 0.4),

    0 0 60px
      rgba(150, 50, 255, 0.25);

  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

#startButton:hover {
  transform:
    translate(-50%, -50%)
    scale(1.06);

  box-shadow:
    0 0 35px
      rgba(0, 255, 255, 0.65);
}

#startButton:active {
  transform:
    translate(-50%, -50%)
    scale(0.97);
}

#message {
  position: fixed;

  left: 50%;
  bottom: 25px;

  transform:
    translateX(-50%);

  z-index: 15;

  color: #ff789b;

  font-size: 13px;

  text-align: center;

  max-width: 90%;

  pointer-events: none;
}

@media (max-width: 600px) {

  #interface {
    left: 12px;
    top: 12px;

    padding:
      12px 14px;
  }

  .brand {
    font-size: 10px;

    letter-spacing: 3px;
  }

  #gesture {
    font-size: 20px;
  }

  #shape {
    font-size: 12px;
  }

  #instruction {
    font-size: 8px;
  }

  #startButton {
    padding:
      14px 24px;

    font-size: 12px;
  }
}
