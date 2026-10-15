import { describe, test, expect } from "bun:test";
import { fibs, fibsRec } from "./fibonacci.js";

describe("fibs (itératif)", () => {
  test("fibs(0) -> []", () => expect(fibs(0)).toEqual([]));
  test("fibs(1) -> [0]", () => expect(fibs(1)).toEqual([0]));
  test("fibs(2) -> [0,1]", () => expect(fibs(2)).toEqual([0, 1]));
  test("fibs(5) -> [0,1,1,2,3]", () => expect(fibs(5)).toEqual([0, 1, 1, 2, 3]));
  test("fibs(8) -> [0,1,1,2,3,5,8,13]", () =>
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]));
});

describe("fibsRec (récursif)", () => {
  test("fibsRec(0) -> []", () => expect(fibsRec(0)).toEqual([]));
  test("fibsRec(1) -> [0]", () => expect(fibsRec(1)).toEqual([0]));
  test("fibsRec(2) -> [0,1]", () => expect(fibsRec(2)).toEqual([0, 1]));
  test("fibsRec(5) -> [0,1,1,2,3]", () =>
    expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3]));
  test("fibsRec(8) -> [0,1,1,2,3,5,8,13]", () =>
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]));
});
