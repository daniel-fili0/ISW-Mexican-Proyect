import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Graph = () => {
  // Chart data points
  const chartData = [
    { value: 65, percentage: "32.5%", xPosition: 8, dotXPosition: 6 },
    { value: 41, percentage: "20.5%", xPosition: 98, dotXPosition: 20 },
    { value: 69, percentage: "34.5%", xPosition: 44, dotXPosition: 60 },
  ];

  // Y-axis labels
  const yAxisLabels = [
    { value: "0", top: 273 },
    { value: "10", top: 239 },
    { value: "20", top: 204 },
    { value: "30", top: 170 },
    { value: "50", top: 136 },
    { value: "60", top: 102 },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 222,
        overflow: "hidden",
      }}
    >
      {/* Y-axis labels */}
      {yAxisLabels.map((label, index) => (
        <Typography
          key={index}
          variant="body2"
          sx={{
            position: "absolute",
            top: label.top,
            left: 2,
            color: "gray.light",
            fontSize: "11px",
            fontFamily: "'Inter-Regular', Helvetica",
            fontWeight: 400,
          }}
        >
          {label.value}
        </Typography>
      ))}

      {/* Chart container */}
      <Box
        sx={{
          position: "absolute",
          width: 263,
          height: 106,
          top: 72,
          left: 38,
        }}
      >
        {/* Horizontal grid lines */}
        {[104, 69, 35].map((top, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: top,
              left: 0.5,
              width: 260,
              height: 1,
              borderBottom: "1px solid #E0E0E0",
            }}
          />
        ))}

        {/* Chart data points with dots and labels */}
        {chartData.map((point, index) => (
          <React.Fragment key={index}>
            {/* Purple dot */}
            <Box
              sx={{
                position: "absolute",
                top: index === 0 ? 6 : index === 1 ? 60 : 5,
                left: point.dotXPosition,
                width: 2,
                height: 2,
                bgcolor: "chart.dots",
                borderRadius: "50%",
              }}
            />

            {/* Value and percentage labels */}
            <Stack
              sx={{
                position: "absolute",
                top: index === 0 ? 1 : index === 1 ? 42 : 0,
                left: point.xPosition,
                width: 60,
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Inter-Bold', Helvetica",
                  fontWeight: 700,
                  color: "text.primary",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                {point.value}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Inter-Regular', Helvetica",
                  fontWeight: 400,
                  color: "gray.medium",
                  fontSize: "12px",
                  textAlign: "center",
                }}
              >
                {point.percentage}
              </Typography>
            </Stack>
          </React.Fragment>
        ))}

        {/* Chart line (vector) */}
        <Box
          component="svg"
          sx={{
            position: "absolute",
            width: 263,
            height: 106,
            top: 0,
            left: 0,
          }}
          viewBox="0 0 263 106"
        >
          <path
            d="M6,6 L20,60 L60,5"
            stroke="#BA68C8"
            strokeWidth="2"
            fill="none"
          />
        </Box>
      </Box>

      {/* Chart title and subtitle */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          Estadísticas
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "secondary.main",
          }}
        >
          Uso semanal
        </Typography>
      </Box>
    </Box>
  );
};

export default Graph;
