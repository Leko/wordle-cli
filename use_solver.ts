#!/usr/bin/env -S deno run --allow-read=./words.txt
import startGame from "./lib/wordle_game.ts";
import Solver from "./lib/solver.ts";

const words = await getWords();

const solver = new Solver(words);

startGame(words, solver);

async function getWords(): Promise<string[]> {
  const file = await Deno.readTextFile("./words.txt");
  const words = file.toLowerCase().split("\n");
  return words;
}
