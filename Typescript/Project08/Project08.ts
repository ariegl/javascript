//Tuplas

type CellValue = "X" | "O" | "";
type GameBoard = [
    [CellValue,CellValue,CellValue],
    [CellValue,CellValue,CellValue],
    [CellValue,CellValue,CellValue]
]

const gameBoard:GameBoard = [
    ['X','O','X'],
    ['O','','X'],
    ['O','X','O']
]

type RGB = [number,number,number];
const rgbColor = [255,255,255];

