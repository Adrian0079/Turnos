import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
//import { Box } from '@mui/material';
import React from 'react';
import { TextField, Box, Grid, Typography, Button } from '@mui/material';
import { blue, red } from '@mui/material/colors';



function App() {

// Estado para el turno
const [turno, setTurno] = useState(1);

// Función para actualizar el turno
const handleTurnoChange = (event) => {
  let newTurno = parseInt(event.target.value, 10);

  // Validar que el turno esté entre 1 y 4
  if (newTurno < 1) newTurno = 4;
  if (newTurno > 4) newTurno = 1;

  // Actualizar el estado del turno
  setTurno(newTurno);
};

  
  const [count, setCount] = useState(0)
  const [largeText, setLargeText] = useState("");
  const [largeText2, setLargeText2] = useState("");
  const [largeText3, setLargeText3] = useState("");
  const [largeText4, setLargeText4] = useState("");
  const [largeText5, setLargeText5] = useState("");
  const [largeText6, setLargeText6] = useState("");
  const [largeText7, setLargeText7] = useState("");
  const [largeText8, setLargeText8] = useState("");
 
  const [m1, setM1] = useState(0) 
  const [m2, setM2] = useState(0) 
  const [m3, setM3] = useState(0) 
  const [m4, setM4] = useState(0) 
  const [m5, setM5] = useState(0) 
  const [m6, setM6] = useState(0)  
  const [m7, setM7] = useState(0) 
  const [m8, setM8] = useState(0) 

  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [p3, setP3] = useState(0);
  const [p4, setP4] = useState(0);
  const [p5, setP5] = useState(0);
  const [p6, setP6] = useState(0);
  const [p7, setP7] = useState(0);
  const [p8, setP8] = useState(0);

  const [d1, setD1] = useState(0);
  const [d2, setD2] = useState(0);
  const [d3, setD3] = useState(0);
  const [d4, setD4] = useState(0);
  const [d5, setD5] = useState(0);
  const [d6, setD6] = useState(0);
  const [d7, setD7] = useState(0);
  const [d8, setD8] = useState(0);

  const mValues = [m1, m2, m3, m4, m5, m6, m7, m8];
  const pValues = [p1, p2, p3, p4, p5, p6, p7, p8];
  const dValues = [d1, d2, d3, d4, d5, d6, d7, d8];

  const mSetters = [setM1, setM2, setM3, setM4, setM5, setM6, setM7, setM8];
  const pSetters = [setP1, setP2, setP3, setP4, setP5, setP6, setP7, setP8];
  const dSetters = [setD1, setD2, setD3, setD4, setD5, setD6, setD7, setD8];



  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [num3, setNum3] = useState(null);

  const [num4, setNum4] = useState(null);
  const [num5, setNum5] = useState(null);
  const [num6, setNum6] = useState(null);

  const [num7, setNum7] = useState(null);
  const [num8, setNum8] = useState(null);
  const [num9, setNum9] = useState(null);

  const [num10, setNum10] = useState(null);
  const [num11, setNum11] = useState(null);
  const [num12, setNum12] = useState(null);

  const [num13, setNum13] = useState(null);
  const [num14, setNum14] = useState(null);
  const [num15, setNum15] = useState(null);

  const [num16, setNum16] = useState(null);
  const [num17, setNum17] = useState(null);
  const [num18, setNum18] = useState(null);

  const [num19, setNum19] = useState(null);
  const [num20, setNum20] = useState(null);
  const [num21, setNum21] = useState(null);

  const [num22, setNum22] = useState(null);
  const [num23, setNum23] = useState(null);
  const [num24, setNum24] = useState(null);



  useEffect(() => {
    const extractNumbers = (text) => {
      const numbers = text.match(/\d+(\.\d+)?/g) || [];
      setNum1(numbers[1] || null);
      setNum2(numbers[3] || null);
      setNum3(numbers[5] || null);
    };

    extractNumbers(largeText);
  }, [largeText]);

  useEffect(() => {
    const extractNumbers2 = (text) => {
      const numbers2 = text.match(/\d+(\.\d+)?/g) || [];
      setNum4(numbers2[1] || null);
      setNum5(numbers2[3] || null);
      setNum6(numbers2[5] || null);
    };

    extractNumbers2(largeText2);
  }, [largeText2]);
//-------------------------------
  useEffect(() => {
    const extractNumbers3 = (text) => {
      const numbers3 = text.match(/\d+(\.\d+)?/g) || [];
      setNum7(numbers3[1] || null);
      setNum8(numbers3[3] || null);
      setNum9(numbers3[5] || null);
    };

    extractNumbers3(largeText3);
  }, [largeText3]);

  useEffect(() => {
    const extractNumbers4 = (text) => {
      const numbers4 = text.match(/\d+(\.\d+)?/g) || [];
      setNum10(numbers4[1] || null);
      setNum11(numbers4[3] || null);
      setNum12(numbers4[5] || null);
    };

    extractNumbers4(largeText4);
  }, [largeText4]);

  useEffect(() => {
    const extractNumbers5 = (text) => {
      const numbers5 = text.match(/\d+(\.\d+)?/g) || [];
      setNum13(numbers5[1] || null);
      setNum14(numbers5[3] || null);
      setNum15(numbers5[5] || null);
    };

    extractNumbers5(largeText5);
  }, [largeText5]);

  useEffect(() => {
    const extractNumbers6 = (text) => {
      const numbers6 = text.match(/\d+(\.\d+)?/g) || [];
      setNum16(numbers6[1] || null);
      setNum17(numbers6[3] || null);
      setNum18(numbers6[5] || null);
    };

    extractNumbers6(largeText6);
  }, [largeText6]);

  useEffect(() => {
    const extractNumbers7 = (text) => {
      const numbers7 = text.match(/\d+(\.\d+)?/g) || [];
      setNum19(numbers7[1] || null);
      setNum20(numbers7[3] || null);
      setNum21(numbers7[5] || null);
    };

    extractNumbers7(largeText7);
  }, [largeText7]);

  useEffect(() => {
    const extractNumbers8 = (text) => {
      const numbers8 = text.match(/\d+(\.\d+)?/g) || [];
      setNum22(numbers8[1] || null);
      setNum23(numbers8[3] || null);
      setNum24(numbers8[5] || null);
    };

    extractNumbers8(largeText8);
  }, [largeText8]);

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" align="center">Magna</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" align="center">Premium</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" align="center">Diesel</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {Array.from({ length: 8 }).map((_, index) => (
        <Grid container spacing={2} alignItems="center" key={index} sx={{ mb: 2 }}>
          <Grid item xs={4}>
            <Typography variant="body1">Posición {index + 1}:</Typography>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder={`Magna ${index + 1}`}
                  value={mValues[index]} // Vincula el valor con el estado m1, m2, ..., m8
                  onChange={(e) => mSetters[index](e.target.value)} // Actualiza el valor de m1, m2, ..., m8
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder={`Premium ${index + 1}`}
                  value={pValues[index]} // Vincula el valor con el estado p1, p2, ..., p8
                  onChange={(e) => pSetters[index](e.target.value)} // Actualiza el valor de p1, p2, ..., p8
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder={`Diesel ${index + 1}`}
                  value={dValues[index]} // Vincula el valor con el estado d1, d2, ..., d8
                  onChange={(e) => dSetters[index](e.target.value)} // Actualiza el valor de d1, d2, ..., d8
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
      
     



      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Consulta a convertir 
        </Typography> <Typography variant="h5" borderColor={red}>POS 1:</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Posición 1"
          value={largeText}
          onChange={(e) => setLargeText(e.target.value)}
        />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
            Consulta a convertir 
        </Typography> <Typography variant="h5" borderColor={red}>POS 2:</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Posición 2"
          value={largeText2}
          onChange={(e) => setLargeText2(e.target.value)}
        />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
            Consulta a convertir 
        </Typography> <Typography variant="h5" borderColor={red}>POS 3:</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Posición 3"
          value={largeText3}
          onChange={(e) => setLargeText3(e.target.value)}
        />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
            Consulta a convertir 
        </Typography> <Typography variant="h5" borderColor={red}>POS 4:</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Posición 4"
          value={largeText4}
          onChange={(e) => setLargeText4(e.target.value)}
        />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
            Consulta a convertir 
        </Typography> <Typography variant="h5" borderColor={red}>POS 5:</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Posición 5"
          value={largeText5}
          onChange={(e) => setLargeText5(e.target.value)}
        />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
            Consulta a convertir 
        </Typography> <Typography variant="h5" borderColor={red}>POS 6:</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Posición 6"
          value={largeText6}
          onChange={(e) => setLargeText6(e.target.value)}
        />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
            Consulta a convertir 
        </Typography> <Typography variant="h5" borderColor={red}>POS 7:</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Posición 7"
          value={largeText7}
          onChange={(e) => setLargeText7(e.target.value)}
        />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
            Consulta a convertir 
        </Typography> <Typography variant="h5" borderColor={red}>POS 8:</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Posición 8"
          value={largeText8}
          onChange={(e) => setLargeText8(e.target.value)}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
          {/* <Typography variant="body1">Primer número: {num1}</Typography>
          <Typography variant="body1">Segundo número: {num2}</Typography>
          <Typography variant="body1">Tercer número: {num3}</Typography> */}
          <Typography variant="h6" gutterBottom className="no-select">
          --Consulta SQL generada POS_1:
          </Typography>
          <Typography variant="body1">
            {`UPDATE DPVGTURND
            SET TOTAL01 = ${(parseFloat(num1 || 0) + parseFloat(m1 || 0)).toFixed(2)},
            TOTAL02 = ${(parseFloat(num2 || 0) + parseFloat(p1 || 0)).toFixed(2)},
            TOTAL03 = ${(parseFloat(num3 || 0) + parseFloat(d1 || 0)).toFixed(2)},
            TOTAL04 = 0,
            ESTADO = NULL
            WHERE (FECHA = '26-JAN-2025 00:00:00') AND (TURNO = ${turno}) AND (POSCARGA = 1);`}
          </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
          {/* <Typography variant="body1">Primer número: {num4}</Typography>
          <Typography variant="body1">Segundo número: {num5}</Typography>
          <Typography variant="body1">Tercer número: {num6}</Typography> */}
          <Typography variant="h6" gutterBottom>
          --Consulta SQL generada POS_2:
          </Typography>
          <Typography variant="body1">
            {`UPDATE DPVGTURND
            SET TOTAL01 = ${(parseFloat(num4 || 0) + parseFloat(m2 || 0)).toFixed(2)},
            TOTAL02 = ${(parseFloat(num5 || 0) + parseFloat(p2 || 0)).toFixed(2)},
            TOTAL03 = ${(parseFloat(num6 || 0) + parseFloat(d2 || 0)).toFixed(2)},
            TOTAL04 = 0,
            ESTADO = NULL
            WHERE (FECHA = '26-JAN-2025 00:00:00') AND (TURNO = ${turno}) AND (POSCARGA = 1);`}
          </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
          {/* <Typography variant="body1">Primer número: {num7}</Typography>
          <Typography variant="body1">Segundo número: {num8}</Typography>
          <Typography variant="body1">Tercer número: {num9}</Typography> */}
          <Typography variant="h6" gutterBottom>
          --Consulta SQL generada POS_3:
          </Typography>
          <Typography variant="body1">
            {`UPDATE DPVGTURND
            SET TOTAL01 = ${(parseFloat(num7 || 0) + parseFloat(m3 || 0)).toFixed(2)},
            TOTAL02 = ${(parseFloat(num8 || 0) + parseFloat(p3 || 0)).toFixed(2)},
            TOTAL03 = ${(parseFloat(num9 || 0) + parseFloat(d3 || 0)).toFixed(2)},
            TOTAL04 = 0,
            ESTADO = NULL
            WHERE (FECHA = '26-JAN-2025 00:00:00') AND (TURNO = ${turno}) AND (POSCARGA = 1);`}
          </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
          {/* <Typography variant="body1">Primer número: {num10}</Typography>
          <Typography variant="body1">Segundo número: {num11}</Typography>
          <Typography variant="body1">Tercer número: {num12}</Typography> */}
          <Typography variant="h6" gutterBottom>
          --Consulta SQL generada POS_4:
          </Typography>
          <Typography variant="body1">
            {`UPDATE DPVGTURND
            SET TOTAL01 = ${(parseFloat(num10 || 0) + parseFloat(m4 || 0)).toFixed(2)},
            TOTAL02 = ${(parseFloat(num11 || 0) + parseFloat(p4 || 0)).toFixed(2)},
            TOTAL03 = ${(parseFloat(num12 || 0) + parseFloat(d4 || 0)).toFixed(2)},
            TOTAL04 = 0,
            ESTADO = NULL
            WHERE (FECHA = '26-JAN-2025 00:00:00') AND (TURNO = ${turno}) AND (POSCARGA = 1);`}
          </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
          {/* <Typography variant="body1">Primer número: {num13}</Typography>
          <Typography variant="body1">Segundo número: {num14}</Typography>
          <Typography variant="body1">Tercer número: {num15}</Typography> */}
          <Typography variant="h6" gutterBottom>
          --Consulta SQL generada POS_5:
          </Typography>
          <Typography variant="body1">
            {`UPDATE DPVGTURND
            SET TOTAL01 = ${(parseFloat(num13 || 0) + parseFloat(m5 || 0)).toFixed(2)},
            TOTAL02 = ${(parseFloat(num14 || 0) + parseFloat(p5 || 0)).toFixed(2)},
            TOTAL03 = ${(parseFloat(num15 || 0) + parseFloat(d5 || 0)).toFixed(2)},
            TOTAL04 = 0,
            ESTADO = NULL
            WHERE (FECHA = '26-JAN-2025 00:00:00') AND (TURNO = ${turno}) AND (POSCARGA = 1);`}
          </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
          {/* <Typography variant="body1">Primer número: {num16}</Typography>
          <Typography variant="body1">Segundo número: {num17}</Typography>
          <Typography variant="body1">Tercer número: {num18}</Typography> */}
          <Typography variant="h6" gutterBottom>
          --Consulta SQL generada POS_6:
          </Typography>
          <Typography variant="body1">
            {`UPDATE DPVGTURND
            SET TOTAL01 = ${(parseFloat(num16 || 0) + parseFloat(m6 || 0)).toFixed(2)},
            TOTAL02 = ${(parseFloat(num17 || 0) + parseFloat(p6 || 0)).toFixed(2)},
            TOTAL03 = ${(parseFloat(num18 || 0) + parseFloat(d6 || 0)).toFixed(2)},
            TOTAL04 = 0,
            ESTADO = NULL
            WHERE (FECHA = '26-JAN-2025 00:00:00') AND (TURNO = ${turno}) AND (POSCARGA = 1);`}
          </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
          {/* <Typography variant="body1">Primer número: {num19}</Typography>
          <Typography variant="body1">Segundo número: {num20}</Typography>
          <Typography variant="body1">Tercer número: {num21}</Typography> */}
          <Typography variant="h6" gutterBottom>
          --Consulta SQL generada POS_7:
          </Typography>
          <Typography variant="body1">
            {`UPDATE DPVGTURND
            SET TOTAL01 = ${(parseFloat(num19 || 0) + parseFloat(m7 || 0)).toFixed(2)},
            TOTAL02 = ${(parseFloat(num20 || 0) + parseFloat(p7 || 0)).toFixed(2)},
            TOTAL03 = ${(parseFloat(num21 || 0) + parseFloat(d7 || 0)).toFixed(2)},
            TOTAL04 = 0,
            ESTADO = NULL
            WHERE (FECHA = '26-JAN-2025 00:00:00') AND (TURNO = ${turno}) AND (POSCARGA = 1);`}
          </Typography>
      </Box>
      <Box sx={{ mt: 2 }}>
          {/* <Typography variant="body1">Primer número: {num22}</Typography>
          <Typography variant="body1">Segundo número: {num23}</Typography>
          <Typography variant="body1">Tercer número: {num24}</Typography> */}
          <Typography variant="h6" gutterBottom>
          --Consulta SQL generada POS_8:
          </Typography>
          <Typography variant="body1">
            {`UPDATE DPVGTURND
            SET TOTAL01 = ${(parseFloat(num22 || 0) + parseFloat(m8 || 0)).toFixed(2)},
            TOTAL02 = ${(parseFloat(num23 || 0) + parseFloat(p8 || 0)).toFixed(2)},
            TOTAL03 = ${(parseFloat(num24 || 0) + parseFloat(d8 || 0)).toFixed(2)},
            TOTAL04 = 0,
            ESTADO = NULL
            WHERE (FECHA = '26-JAN-2025 00:00:00') AND (TURNO = ${turno}) AND (POSCARGA = 1);`}
          </Typography>
      </Box>
      <TextField
        label="Turno"
        type="number"
        value={turno}
        onChange={handleTurnoChange} // Actualizar el valor del turno
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        onClick={() => setTurno((turno % 4) + 1)} // Incrementa el turno cíclicamente
      >
        Siguiente turno
      </Button>
    </Box>
  )
}

export default App
