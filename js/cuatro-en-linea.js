var prot = true;
var det = new Array(7);

for (i = 0; i < det.length; i++) {
  det[i] = new Array(6);
}

for (i = 0; i < det.length; i++) {
  for (var j = 0; j < det.length; j++) {
    det[i][j] = parseInt(0);
  }
}
function calculo(x , y) {
  var izder = x;
  var arbajo = y;
  var mat = new Array(7);
  var i = 0;

  for (i = 0; i < mat.length; i++) {  //  FILAS
    mat[i] = new Array(6);  //  COLUMNAS
  }



  if (izder == 1) {

    if (det[0][6] == 0) {

      if (prot) {
      $("#circ36").addClass("on1");
      prot = false;
      det[0][6] = parseInt(1);
    } else {
      $("#circ36").addClass("on2");
      prot = true;
      det[0][6] = parseInt(2);
    }
    } else {

      if (det[0][5] == 0) {

        if (prot) {
        $("#circ29").addClass("on1");
        prot = false;
        det[0][5] = parseInt(1);
      } else {
        $("#circ29").addClass("on2");
        prot = true;
        det[0][5] = parseInt(2);
      }
    } else {
      if (det[0][4] == 0) {

        if (prot) {
        $("#circ22").addClass("on1");
        prot = false;
        det[0][4] = parseInt(1);
      } else {
        $("#circ22").addClass("on2");
        prot = true;
        det[0][4] = parseInt(2);
      }
    } else {
      if (det[0][3] == 0) {

        if (prot) {
        $("#circ15").addClass("on1");
        prot = false;
        det[0][3] = parseInt(1);
      } else {
        $("#circ15").addClass("on2");
        prot = true;
        det[0][3] = parseInt(2);
      }
    } else {
      if (det[0][2] == 0) {

        if (prot) {
        $("#circ8").addClass("on1");
        prot = false;
        det[0][2] = parseInt(1);
      } else {
        $("#circ8").addClass("on2");
        prot = true;
        det[0][2] = parseInt(2);
      }
    } else {
      if (det[0][1] == 0) {

        if (prot) {
        $("#circ1").addClass("on1");
        prot = false;
        det[0][1] = parseInt(1);
      } else {
        $("#circ1").addClass("on2");
        prot = true;
        det[0][1] = parseInt(2);
      }
    }
    }
    }
    }
    }
    } //  DET[0][5]
       //  ELSE

    } //  IZDER INICIAL



    if (izder == 2) {

      if (det[1][6] == 0) {

        if (prot) {
        $("#circ37").addClass("on1");
        prot = false;
        det[1][6] = parseInt(1);
      } else {
        $("#circ37").addClass("on2");
        prot = true;
        det[1][6] = parseInt(2);
      }
      } else {

        if (det[1][5] == 0) {

          if (prot) {
          $("#circ30").addClass("on1");
          prot = false;
          det[1][5] = parseInt(1);
        } else {
          $("#circ30").addClass("on2");
          prot = true;
          det[1][5] = parseInt(2);
        }
      } else {
        if (det[1][4] == 0) {

          if (prot) {
          $("#circ23").addClass("on1");
          prot = false;
          det[1][4] = parseInt(1);
        } else {
          $("#circ23").addClass("on2");
          prot = true;
          det[1][4] = parseInt(2);
        }
      } else {
        if (det[1][3] == 0) {

          if (prot) {
          $("#circ16").addClass("on1");
          prot = false;
          det[1][3] = parseInt(1);
        } else {
          $("#circ16").addClass("on2");
          prot = true;
          det[1][3] = parseInt(2);
        }
      } else {
        if (det[1][2] == 0) {

          if (prot) {
          $("#circ9").addClass("on1");
          prot = false;
          det[1][2] = parseInt(1);
        } else {
          $("#circ9").addClass("on2");
          prot = true;
          det[1][2] = parseInt(2);
        }
      } else {
        if (det[1][1] == 0) {

          if (prot) {
          $("#circ2").addClass("on1");
          prot = false;
          det[1][1] = parseInt(1);
        } else {
          $("#circ2").addClass("on2");
          prot = true;
          det[1][1] = parseInt(2);
        }
      }
      }
      }
      }
      }
      } //  DET[0][5]
         //  ELSE

      }

      if (izder == 3) {

        if (det[2][6] == 0) {

          if (prot) {
          $("#circ38").addClass("on1");
          prot = false;
          det[2][6] = parseInt(1);
        } else {
          $("#circ38").addClass("on2");
          prot = true;
          det[2][6] = parseInt(2);
        }
        } else {

          if (det[2][5] == 0) {

            if (prot) {
            $("#circ31").addClass("on1");
            prot = false;
            det[2][5] = parseInt(1);
          } else {
            $("#circ31").addClass("on2");
            prot = true;
            det[2][5] = parseInt(2);
          }
        } else {
          if (det[2][4] == 0) {

            if (prot) {
            $("#circ24").addClass("on1");
            prot = false;
            det[2][4] = parseInt(1);
          } else {
            $("#circ24").addClass("on2");
            prot = true;
            det[2][4] = parseInt(2);
          }
        } else {
          if (det[2][3] == 0) {

            if (prot) {
            $("#circ17").addClass("on1");
            prot = false;
            det[2][3] = parseInt(1);
          } else {
            $("#circ17").addClass("on2");
            prot = true;
            det[2][3] = parseInt(2);
          }
        } else {
          if (det[2][2] == 0) {

            if (prot) {
            $("#circ10").addClass("on1");
            prot = false;
            det[2][2] = parseInt(1);
          } else {
            $("#circ10").addClass("on2");
            prot = true;
            det[2][2] = parseInt(2);
          }
        } else {
          if (det[2][1] == 0) {

            if (prot) {
            $("#circ3").addClass("on1");
            prot = false;
            det[2][1] = parseInt(1);
          } else {
            $("#circ3").addClass("on2");
            prot = true;
            det[2][1] = parseInt(2);
          }
        }
        }
        }
        }
        }
        } //  DET[0][5]
           //  ELSE

        }

        if (izder == 4) {

          if (det[3][6] == 0) {

            if (prot) {
            $("#circ39").addClass("on1");
            prot = false;
            det[3][6] = parseInt(1);
          } else {
            $("#circ39").addClass("on2");
            prot = true;
            det[3][6] = parseInt(2);
          }
          } else {

            if (det[3][5] == 0) {

              if (prot) {
              $("#circ32").addClass("on1");
              prot = false;
              det[3][5] = parseInt(1);
            } else {
              $("#circ32").addClass("on2");
              prot = true;
              det[3][5] = parseInt(2);
            }
          } else {
            if (det[3][4] == 0) {

              if (prot) {
              $("#circ25").addClass("on1");
              prot = false;
              det[3][4] = parseInt(1);
            } else {
              $("#circ25").addClass("on2");
              prot = true;
              det[3][4] = parseInt(2);
            }
          } else {
            if (det[3][3] == 0) {

              if (prot) {
              $("#circ18").addClass("on1");
              prot = false;
              det[3][3] = parseInt(1);
            } else {
              $("#circ18").addClass("on2");
              prot = true;
              det[3][3] = parseInt(2);
            }
          } else {
            if (det[3][2] == 0) {

              if (prot) {
              $("#circ11").addClass("on1");
              prot = false;
              det[3][2] = parseInt(1);
            } else {
              $("#circ11").addClass("on2");
              prot = true;
              det[3][2] = parseInt(2);
            }
          } else {
            if (det[3][1] == 0) {

              if (prot) {
              $("#circ4").addClass("on1");
              prot = false;
              det[3][1] = parseInt(1);
            } else {
              $("#circ4").addClass("on2");
              prot = true;
              det[3][1] = parseInt(2);
            }
          }
          }
          }
          }
          }
          } //  DET[0][5]
             //  ELSE

          }

          if (izder == 5) {

            if (det[4][6] == 0) {

              if (prot) {
              $("#circ40").addClass("on1");
              prot = false;
              det[4][6] = parseInt(1);
            } else {
              $("#circ40").addClass("on2");
              prot = true;
              det[4][6] = parseInt(2);
            }
            } else {

              if (det[4][5] == 0) {

                if (prot) {
                $("#circ33").addClass("on1");
                prot = false;
                det[4][5] = parseInt(1);
              } else {
                $("#circ33").addClass("on2");
                prot = true;
                det[4][5] = parseInt(2);
              }
            } else {
              if (det[4][4] == 0) {

                if (prot) {
                $("#circ26").addClass("on1");
                prot = false;
                det[4][4] = parseInt(1);
              } else {
                $("#circ26").addClass("on2");
                prot = true;
                det[4][4] = parseInt(2);
              }
            } else {
              if (det[4][3] == 0) {

                if (prot) {
                $("#circ19").addClass("on1");
                prot = false;
                det[4][3] = parseInt(1);
              } else {
                $("#circ19").addClass("on2");
                prot = true;
                det[4][3] = parseInt(2);
              }
            } else {
              if (det[4][2] == 0) {

                if (prot) {
                $("#circ12").addClass("on1");
                prot = false;
                det[4][2] = parseInt(1);
              } else {
                $("#circ12").addClass("on2");
                prot = true;
                det[4][2] = parseInt(2);
              }
            } else {
              if (det[4][1] == 0) {

                if (prot) {
                $("#circ5").addClass("on1");
                prot = false;
                det[4][1] = parseInt(1);
              } else {
                $("#circ5").addClass("on2");
                prot = true;
                det[4][1] = parseInt(2);
              }
            }
            }
            }
            }
            }
            } //  DET[0][5]
               //  ELSE

            }

            if (izder == 6) {

              if (det[5][6] == 0) {

                if (prot) {
                $("#circ41").addClass("on1");
                prot = false;
                det[5][6] = parseInt(1);
              } else {
                $("#circ41").addClass("on2");
                prot = true;
                det[5][6] = parseInt(2);
              }
              } else {

                if (det[5][5] == 0) {

                  if (prot) {
                  $("#circ34").addClass("on1");
                  prot = false;
                  det[5][5] = parseInt(1);
                } else {
                  $("#circ34").addClass("on2");
                  prot = true;
                  det[5][5] = parseInt(2);
                }
              } else {
                if (det[5][4] == 0) {

                  if (prot) {
                  $("#circ27").addClass("on1");
                  prot = false;
                  det[5][4] = parseInt(1);
                } else {
                  $("#circ27").addClass("on2");
                  prot = true;
                  det[5][4] = parseInt(2);
                }
              } else {
                if (det[5][3] == 0) {

                  if (prot) {
                  $("#circ20").addClass("on1");
                  prot = false;
                  det[5][3] = parseInt(1);
                } else {
                  $("#circ20").addClass("on2");
                  prot = true;
                  det[5][3] = parseInt(2);
                }
              } else {
                if (det[5][2] == 0) {

                  if (prot) {
                  $("#circ13").addClass("on1");
                  prot = false;
                  det[5][2] = parseInt(1);
                } else {
                  $("#circ13").addClass("on2");
                  prot = true;
                  det[5][2] = parseInt(2);
                }
              } else {
                if (det[5][1] == 0) {

                  if (prot) {
                  $("#circ6").addClass("on1");
                  prot = false;
                  det[5][1] = parseInt(1);
                } else {
                  $("#circ6").addClass("on2");
                  prot = true;
                  det[5][1] = parseInt(2);
                }
              }
              }
              }
              }
              }
              } //  DET[0][5]
                 //  ELSE

              }

              if (izder == 7) {

                if (det[6][6] == 0) {

                  if (prot) {
                  $("#circ42").addClass("on1");
                  prot = false;
                  det[6][6] = parseInt(1);
                } else {
                  $("#circ42").addClass("on2");
                  prot = true;
                  det[6][6] = parseInt(2);
                }
                } else {

                  if (det[6][5] == 0) {

                    if (prot) {
                    $("#circ35").addClass("on1");
                    prot = false;
                    det[6][5] = parseInt(1);
                  } else {
                    $("#circ35").addClass("on2");
                    prot = true;
                    det[6][5] = parseInt(2);
                  }
                } else {
                  if (det[6][4] == 0) {

                    if (prot) {
                    $("#circ28").addClass("on1");
                    prot = false;
                    det[6][4] = parseInt(1);
                  } else {
                    $("#circ28").addClass("on2");
                    prot = true;
                    det[6][4] = parseInt(2);
                  }
                } else {
                  if (det[6][3] == 0) {

                    if (prot) {
                    $("#circ21").addClass("on1");
                    prot = false;
                    det[6][3] = parseInt(1);
                  } else {
                    $("#circ21").addClass("on2");
                    prot = true;
                    det[6][3] = parseInt(2);
                  }
                } else {
                  if (det[6][2] == 0) {

                    if (prot) {
                    $("#circ14").addClass("on1");
                    prot = false;
                    det[6][2] = parseInt(1);
                  } else {
                    $("#circ14").addClass("on2");
                    prot = true;
                    det[6][2] = parseInt(2);
                  }
                } else {
                  if (det[6][1] == 0) {

                    if (prot) {
                    $("#circ7").addClass("on1");
                    prot = false;
                    det[6][1] = parseInt(1);
                  } else {
                    $("#circ7").addClass("on2");
                    prot = true;
                    det[6][1] = parseInt(2);
                  }
                }
                }
                }
                }
                }
                } //  DET[0][5]


                }
        ganadores();

  }

  function ganadores() {
    var i = parseInt(0);
    var j =parseInt(0);

    for (i = 0; i < det.length; i++) {
      if (((det[0][i] == 1) && (det[1][i] == 1) && (det[2][i] == 1) && (det[3][i] == 1)) || ((det[1][i] == 1) && (det[2][i] == 1) && (det[3][i] == 1) && (det[4][i] == 1)) || ((det[2][i] == 1) && (det[3][i] == 1) && (det[4][i] == 1) && (det[5][i] == 1)) || ((det[3][i] == 1) && (det[4][i] == 1) && (det[5][i] == 1) && (det[6][i] == 1))) {
        alert("El jugador rojo gana");
      } else {
        if (((det[0][i] == 2) && (det[1][i] == 2) && (det[2][i] == 2) && (det[3][i] == 2)) || ((det[1][i] == 2) && (det[2][i] == 2) && (det[3][i] == 2) && (det[4][i] == 2)) || ((det[2][i] == 2) && (det[3][i] == 2) && (det[4][i] == 2) && (det[5][i] == 2)) || ((det[3][i] == 2) && (det[4][i] == 2) && (det[5][i] == 2) && (det[6][i] == 2))) {
          alert("El jugador azul gana");
      }
    }
  }

  for (i = 0; i < det.length; i++) {
    if (((det[i][0] == 1) && (det[i][1] == 1) && (det[i][2] == 1) && (det[i][3] == 1)) || ((det[i][1] == 1) && (det[i][2] == 1) && (det[i][3] == 1) && (det[i][4] == 1)) || ((det[i][2] == 1) && (det[i][3] == 1) && (det[i][4] == 1) && (det[i][5] == 1)) || ((det[i][3] == 1) && (det[i][4] == 1) && (det[i][5] == 1) && (det[i][6] == 1))) {
      alert("El jugador rojo gana");
    } else {
      if (((det[i][0] == 2) && (det[i][1] == 2) && (det[i][2] == 2) && (det[i][3] == 2)) || ((det[i][1] == 2) && (det[i][2] == 2) && (det[i][3] == 2) && (det[i][4] == 2)) || ((det[i][2] == 2) && (det[i][3] == 2) && (det[i][4] == 2) && (det[i][5] == 2)) || ((det[i][3] == 2) && (det[i][4] == 2) && (det[i][5] == 2) && (det[i][6] == 2))) {
        alert("El jugador azul gana");
    }
  }
}

  //  DIAGONAL UNICA
  if ((det[0][4] == 1) && (det[1][3] == 1) && (det[2][2] == 1) && (det[3][1] == 1)) {
    alert("El jugador rojo gana");
  }

  if ((det[0][4] == 2) && (det[1][3] == 2) && (det[2][2] == 2) && (det[3][1] == 2)) {
    alert("El jugador azul gana");
  }

  if ((det[0][3] == 1) && (det[1][4] == 1) && (det[2][5] == 1) && (det[3][5] == 1)) {
    alert("El jugador rojo gana");
  }

  if ((det[0][3] == 2) && (det[1][4] == 2) && (det[2][5] == 2) && (det[3][5] == 2)) {
    alert("El jugador azul gana");
  }

  //  DIAGONAL DOBLE
  if (((det[0][5] == 1) && (det[1][4] == 1) && (det[2][3] == 1) && (det[3][2] == 1)) || ((det[1][4] == 1) && (det[2][3] == 1) && (det[3][2] == 1) && (det[4][1] == 1))) {
    alert("El jugador rojo gana");
  }

  if (((det[0][5] == 2) && (det[1][4] == 2) && (det[2][3] == 2) && (det[3][2] == 2)) || ((det[1][4] == 2) && (det[2][3] == 2) && (det[3][2] == 2) && (det[4][1] == 2))) {
    alert("El jugador azul gana");
  }

  if (((det[6][2] == 1) && (det[5][3] == 1) && (det[4][4] == 1) && (det[3][5] == 1)) || ((det[5][3] == 1) && (det[4][4] == 1) && (det[3][5] == 1) && (det[2][6] == 1))) {
    alert("El jugador rojo gana");
  }

  if (((det[6][2] == 2) && (det[5][3] == 2) && (det[4][4] == 2) && (det[3][5] == 2)) || ((det[5][3] == 2) && (det[4][4] == 2) && (det[3][5] == 2) && (det[2][6] == 2))) {
    alert("El jugador azul gana");
  }

  //  DIAGONAL TRIPLE
  if (((det[6][1] == 1) && (det[5][2] == 1) && (det[4][3] == 1) && (det[3][4] == 1)) || ((det[5][2] == 1) && (det[4][3] == 1) && (det[3][4] == 1) && (det[2][5] == 1)) || ((det[4][3] == 1) && (det[3][4] == 1) && (det[2][5] == 1) && (det[1][6] == 1))) {
    alert("El jugador rojo gana");
  }

  if (((det[6][1] == 2) && (det[5][2] == 2) && (det[4][3] == 2) && (det[3][4] == 2)) || ((det[5][2] == 2) && (det[4][3] == 2) && (det[3][4] == 2) && (det[2][5] == 2)) || ((det[4][3] == 2) && (det[3][4] == 2) && (det[2][5] == 2) && (det[1][6] == 2))) {
    alert("El jugador azul gana");
  }

  if (((det[0][6] == 1) && (det[1][5] == 1) && (det[2][4] == 1) && (det[3][3] == 1)) || ((det[1][5] == 1) && (det[2][4] == 1) && (det[3][3] == 1) && (det[4][2] == 1)) || ((det[2][4] == 1) && (det[3][3] == 1) && (det[4][2] == 1) && (det[5][1] == 1))) {
    alert("El jugador rojo gana");
  }

  if (((det[0][6] == 2) && (det[1][5] == 2) && (det[2][4] == 2) && (det[3][3] == 2)) || ((det[1][5] == 2) && (det[2][4] == 2) && (det[3][3] == 2) && (det[4][2] == 2)) || ((det[2][4] == 2) && (det[3][3] == 2) && (det[4][2] == 2) && (det[5][1] == 2))) {
    alert("El jugador azul gana");
  }

  //  *** ESPEJO  ***
  //  DIAGONAL UNICA
  if ((det[0][2] == 1) && (det[1][3] == 1) && (det[2][4] == 1) && (det[3][5] == 1)) {
    alert("El jugador rojo gana");
  }

  if ((det[0][2] == 2) && (det[1][3] == 2) && (det[2][4] == 2) && (det[3][5] == 2)) {
    alert("El jugador azul gana");
  }

  if ((det[3][0] == 1) && (det[4][1] == 1) && (det[5][2] == 1) && (det[6][3] == 1)) {
    alert("El jugador rojo gana");
  }

  if ((det[3][0] == 2) && (det[4][1] == 2) && (det[5][2] == 2) && (det[6][3] == 2)) {
    alert("El jugador azul gana");
  }

  //  DIAGONAL DOBLE
  if (((det[2][0] == 1) && (det[3][1] == 1) && (det[4][2] == 1) && (det[5][3] == 1)) || ((det[3][1] == 1) && (det[4][2] == 1) && (det[5][3] == 1) && (det[6][4] == 1))) {
    alert("El jugador rojo gana");
  }

  if (((det[2][0] == 2) && (det[3][1] == 2) && (det[4][2] == 2) && (det[5][3] == 2)) || ((det[3][1] == 2) && (det[4][2] == 2) && (det[5][3] == 2) && (det[6][4] == 2))) {
    alert("El jugador azul gana");
  }

  if (((det[0][1] == 1) && (det[5][3] == 1) && (det[4][4] == 1) && (det[3][5] == 1)) || ((det[5][3] == 1) && (det[4][4] == 1) && (det[3][5] == 1) && (det[2][6] == 1))) {
    alert("El jugador rojo gana");
  }

  if (((det[6][2] == 2) && (det[5][3] == 2) && (det[4][4] == 2) && (det[3][5] == 2)) || ((det[5][3] == 2) && (det[4][4] == 2) && (det[3][5] == 2) && (det[2][6] == 2))) {
    alert("El jugador azul gana");
  }

  //  DIAGONAL TRIPLE
  if (((det[6][1] == 1) && (det[5][2] == 1) && (det[4][3] == 1) && (det[3][4] == 1)) || ((det[5][2] == 1) && (det[4][3] == 1) && (det[3][4] == 1) && (det[2][5] == 1)) || ((det[4][3] == 1) && (det[3][4] == 1) && (det[2][5] == 1) && (det[1][6] == 1))) {
    alert("El jugador rojo gana");
  }

  if (((det[6][1] == 2) && (det[5][2] == 2) && (det[4][3] == 2) && (det[3][4] == 2)) || ((det[5][2] == 2) && (det[4][3] == 2) && (det[3][4] == 2) && (det[2][5] == 2)) || ((det[4][3] == 2) && (det[3][4] == 2) && (det[2][5] == 2) && (det[1][6] == 2))) {
    alert("El jugador azul gana");
  }

  if (((det[0][6] == 1) && (det[1][5] == 1) && (det[2][4] == 1) && (det[3][3] == 1)) || ((det[1][5] == 1) && (det[2][4] == 1) && (det[3][3] == 1) && (det[4][2] == 1)) || ((det[2][4] == 1) && (det[3][3] == 1) && (det[4][2] == 1) && (det[5][1] == 1))) {
    alert("El jugador rojo gana");
  }

  if (((det[0][6] == 2) && (det[1][5] == 2) && (det[2][4] == 2) && (det[3][3] == 2)) || ((det[1][5] == 2) && (det[2][4] == 2) && (det[3][3] == 2) && (det[4][2] == 2)) || ((det[2][4] == 2) && (det[3][3] == 2) && (det[4][2] == 2) && (det[5][1] == 2))) {
    alert("El jugador azul gana");
  }

}
