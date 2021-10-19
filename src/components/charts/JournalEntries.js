import React from "react";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  {
    subject: "Dispositional",
    A: 5,
    fullMark: 10
  },
  {
    subject: "Affective",
    A: 2,
    fullMark: 10
  },
  {
    subject: "Interpersonal",
    A: 3,
    fullMark: 10
  },
  {
    subject: "Cognitive",
    A: 5,
    fullMark: 10
  },
  {
    subject: "Procedural",
    A: 7,
    fullMark: 10
  }
];

export default function App() {
  return (
    <ResponsiveContainer width="100%" height={500}>
    <RadarChart 
      cx="50%" 
      cy="50%"
      outerRadius="70%"
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Journal"
        dataKey="A"
        stroke="var(--textLink)"
        fill="var(--textLink)"
        fillOpacity={0.6}
      />
    </RadarChart>
    </ResponsiveContainer>
  );
}